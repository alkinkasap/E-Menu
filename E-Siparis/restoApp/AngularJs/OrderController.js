app.controller('OrderController', function ($scope, $filter, ortak, $routeParams) {
    ortak.work = false;
    $scope.ortak.GelenListe = [];
    $scope.ortak.uzunluk = 0;
    $scope.ortak.aktarici = ortak.Count;
    ortak.GelenListe = ortak.Transfer;
    $scope.seciliYemekler = ortak.GelenListe;
    ortak.uzunluk = ortak.GelenListe.length;
    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < ortak.GelenListe.length; i++) {
            total += ortak.GelenListe[i].fiyat * ortak.GelenListe[i].adet;
        }
        return total;
    }

    $scope.isEmpty = function () {
        if (ortak.Transfer.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    $scope.Tamamlandi = function () {
        swal("Teşekkürler!", "Siparişiniz Başarıyla Oluşturuldu", "success");
    }

    $scope.cancel = function () {
        $scope.seciliYemekler = [];
        ortak.Count = 0;
        swal("Bilgilendirme!", "Siparişler İptal Edildi.", "success");
        window.location.href = "index.html#/"
        ortak.work = true;

    }


});