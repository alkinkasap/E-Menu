app.factory("ortak", function () {
    return {};
});

app.controller('BaseController', function ($scope, $filter, ortak, $routeParams) {
    $scope.ortak = ortak;

    if (ortak.aktarici == null) {
        $scope.ortak.work = true;
    }
    if (ortak.work) {
        $scope.ortak.Transfer = [];
        $scope.ortak.Count = 0;
        $scope.seciliYemekler = [];
    } else {
        ortak.Count = ortak.aktarici;
        $scope.seciliYemekler = ortak.GelenListe;
    }
    $scope.yemekler = [
        { Id: '1', Ad: 'Kuzu Şiş', url: 'yemek1.jpg', fiyat: 15, adet: 1 },
        { Id: '2', Ad: 'Lahmacun', url: 'yemek2.jpg', fiyat: 7, adet: 1 },
        { Id: '3', Ad: 'Urfa Kebap', url: 'yemek3.jpg', fiyat: 17, adet: 1 },
        { Id: '4', Ad: 'Adana Kebap', url: 'yemek4.jpg', fiyat: 17.5, adet: 1 },
        { Id: '5', Ad: 'Patlıcan Kebap', url: 'yemek5.jpg', fiyat: 15, adet: 1 },
        { Id: '6', Ad: 'Tavuk Kebap', url: 'yemek6.jpg', fiyat: 10, adet: 1 },
        { Id: '7', Ad: 'Vanilya Tatlı', url: 'yemek7.jpg', fiyat: 8, adet: 1 },
        { Id: '8', Ad: 'Vişne CheeseCake', url: 'yemek8.jpg', fiyat: 12.5, adet: 1 },
        { Id: '9', Ad: 'Çikolatalı Pasta', url: 'yemek9.jpg', fiyat: 12, adet: 1 },
        { Id: '10', Ad: 'Çilekli Tatlı', url: 'yemek10.jpg', fiyat: 12.5, adet: 1 },
        { Id: '11', Ad: 'Baklava', url: 'yemek11.jpg', fiyat: 12, adet: 1 },
        { Id: '12', Ad: 'Çilekli CheeseCake', url: 'yemek12.jpg', fiyat: 8, adet: 1 },
        { Id: '13', Ad: 'Şöbiyet', url: 'yemek13.jpg', fiyat: 8, adet: 1 },
        { Id: '14', Ad: 'Milkshake', url: 'yemek14.jpg', fiyat: 4.5, adet: 1 },
        { Id: '15', Ad: 'Çay', url: 'yemek15.jpg', fiyat: 1, adet: 1 },
        { Id: '16', Ad: 'Kola', url: 'yemek16.jpg', fiyat: 2, adet: 1 },
    ];



    $scope.Ekle = function (event) {
        if ($scope.seciliYemekler.length >= 0) {
            $('#slider').animate({ height: '105' })
        }
        var id = event.target.id;
        // var result = $.grep($scope.yemekler, function (e) { return e.id == id; });
        var result = $filter('filter')($scope.yemekler, function (d) { return d.Id == id })[0];
        //alert(result.Id);
        var control = $filter('filter')($scope.seciliYemekler, function (d) { return d.Id == id })[0];
        if (control != null) {
            control.adet = control.adet + 1;
            return;

        } else {

        }

        if ($scope.seciliYemekler.length == 9) {
            sweetAlert(" :-( ", "Sipariş Limiti Doldu!", "error");
            return;
        }
        $scope.seciliYemekler.push(result);
        $scope.ortak.Transfer = $scope.seciliYemekler;
        if (ortak.work) {
            var total = 0;

            ortak.Count = $scope.seciliYemekler.length;
        } else {


        }
        ortak.Count = $scope.seciliYemekler.length;

    }





});