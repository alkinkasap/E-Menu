app.controller('DetailController', function ($scope, $filter, ortak, $routeParams) {

    if ($routeParams.showFood != null) {
        ortak.work = false;

        $scope.ortak.GelenListe = [];
        $scope.ortak.uzunluk = 0;
        $scope.ortak.aktarici = ortak.Count;
        ortak.GelenListe = ortak.Transfer;
        $scope.seciliYemekler = ortak.GelenListe;
        ortak.uzunluk = ortak.GelenListe.length;

        var id = $routeParams.showFood;
        var selected = $filter('filter')($scope.yemekler, function (d) { return d.Id == id })[0];
        $scope.SelectedFood = selected;
    }

    $scope.plus = function () {
        var id = parseInt($routeParams.showFood) + 1;
        if (id == 17) {
            id = 1;
        }
        window.location.href = "/index.html#/detail/" + id;
    }
    $scope.minus = function () {
        var id = parseInt($routeParams.showFood) - 1;
        if (id == 0) {
            id = 16;
        }
        window.location.href = "/index.html#/detail/" + id;
    }

})