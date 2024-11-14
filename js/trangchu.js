angular
.module("myapp", ["ngRoute"])
.controller("myctrlHome",function($scope) {
    $scope.cart = [];
    $scope.products = [
        {
            imgProducts: "IMG/1.jpeg",
            nameProducts: "Túi sách trung Tote Camping",
            priceProducts: "941.000đ",
        },
        {
            imgProducts: "IMG/hinharticle5.jpg",
            nameProducts: "Ví dài Camping",
            priceProducts: "686.000đ",
        },
        {
            imgProducts: "IMG/hinharticl2.jpg",
            nameProducts: "Túi sách nhỏ đeo vai Camping",
            priceProducts: "882.000đ",
        },
        {
            imgProducts: "IMG/hinharticle7.jpg",
            nameProducts: "Túi sách nhỏ phối khóa Camping",
            priceProducts: "941.000đ",
        },
    ];
        
    $scope.addToCart = function(product) {
        let found = false;
        for (let i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].nameProducts === product.nameProducts) {
                $scope.cart[i].quantity += 1;
                found = true;
                break;
            }
        }
        if (!found) {
            let productCopy = angular.copy(product);
            productCopy.quantity = 1;
            $scope.cart.push(productCopy);
        }
            console.log('Đã thêm sản phẩm vào giỏ hàng');
        };

    $scope.increaseQuantity = function(item) {
        item.quantity += 1;
    };

    $scope.decreaseQuantity = function(item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
    };
    $scope.getTotalPrice = function() {
        let total = 0;
        for (let i = 0; i < $scope.cart.length; i++) {
            let price = parseFloat($scope.cart[i].priceProducts.replace(/\D/g, ''));
            total += price * $scope.cart[i].quantity;
        }
        return total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    $scope.getCartItemCount = function() {
        let count = 0;
        for (let i = 0; i < $scope.cart.length; i++) {
            count += $scope.cart[i].quantity;
        }
        return count;
    };

    $scope.delete = function(index){
        $scope.cart.splice(index, 1);
    }
})
// .config(function($routeProvider){
//     $routeProvider
//     .when('/',{
//         templateUrl: 'TrangChu.html?'+Math.random(),
//     })
//     .when('/vo',{
//         templateUrl: 'vo.html?'+Math.random(),
//     })
//     .otherwise({
//         redirectTo: "/",
//         template: '<h1>404 - Không tìm thấy trang!</h1>'

//     })
// })