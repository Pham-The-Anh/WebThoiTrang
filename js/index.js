
angular
.module("MyAPP", ['ngRoute'])
.run(function ($rootScope, $timeout) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $rootScope.loading = false;
        }, 1000);
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert('Lỗi tải trang!');
    });
})
.controller("myctrl",function($scope){
    
    $scope.products = [
        {
            imgProducts: "IMG/1.jpeg",
            nameProducts: "Túi sách trung Tote Camping",
            priceProducts: 941000,
        },
        {
            imgProducts: "IMG/hinharticle5.jpg",
            nameProducts: "Ví dài Camping",
            priceProducts: 686000,
        },
        {
            imgProducts: "IMG/hinharticl2.jpg",
            nameProducts: "Túi sách nhỏ đeo vai Camping",
            priceProducts: 882000,
        },
        {
            imgProducts: "IMG/hinharticle7.jpg",
            nameProducts: "Túi sách nhỏ phối khóa Camping",
            priceProducts: 941000,
        },
    ];
    $scope.socks = [
        {
            imgProducts: "imgVO/vococaobo2doikieutron.jpg",
            nameProducts: "Vớ cổ cao bộ 2 đôi kiểu trơn",
            priceProducts: 47000,
            discountedPrice: 68000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieutron.jpg",
            nameProducts: "Vớ cổ cao bộ 3 đôi kiểu trơn",
            priceProducts: 123000,
            discountedPrice: 176000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieutron1.jpg",
            nameProducts: "Vớ cổ cao bộ 2 đôi kiểu trơn",
            priceProducts: 47000,
            discountedPrice: 68000
        },
        {
            imgProducts: "imgVO/vocothapbo2doikieudu.jpg",
            nameProducts: "Vớ cổ thấp bộ 2 đôi kiểu dù",
            priceProducts: 54000,
            discountedPrice: 78000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieumeo.jpg",
            nameProducts: "Vớ cổ cao bộ 3 đôi kiểu mèo",
            priceProducts: 54000,
            discountedPrice: 78000
        },
        {
            imgProducts: "imgVO/vocothapbo2doikieuongvahoa.jpg",
            nameProducts: "Vớ cổ thấp bộ 2 đôi kiểu ong và hoa",
            priceProducts: 54000,
            discountedPrice: 78000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieutron2.jpg",
            nameProducts: "Vớ cổ cao bộ 3 đôi kiểu trơn",
            priceProducts: 68000,
            discountedPrice: 98000
        },
        {
            imgProducts: "imgVO/voluoibo2doikieutron.jpg",
            nameProducts: "Vớ lười bộ 3 đôi kiểu trơn",
            priceProducts: 48000,
            discountedPrice: 68000
        },
        {
            imgProducts: "imgVO/vocothapbo2doikieusoc.jpg",
            nameProducts: "Vớ cổ thấp bộ 2 đôi kiểu sọc",
            priceProducts: 48000,
            discountedPrice: 68000
        },
        {
            imgProducts: "imgVO/vococaobo2doikieutron.jpg",
            nameProducts: "Vớ cổ cao bộ 2 đôi kiểu trơn",
            priceProducts: 47000,
            discountedPrice: 68000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieumeo.jpg",
            nameProducts: "Vớ cổ cao bộ 3 đôi kiểu mèo",
            priceProducts: 54000,
            discountedPrice: 78000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieutron1.jpg",
            nameProducts: "Vớ cổ cao bộ 2 đôi kiểu trơn",
            priceProducts: 47000,
            discountedPrice: 68000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieumeo.jpg",
            nameProducts: "Vớ cổ cao bộ 3 đôi kiểu mèo",
            priceProducts: 54000,
            discountedPrice: 78000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieutron2.jpg",
            nameProducts: "Vớ cổ cao bộ 3 đôi kiểu trơn",
            priceProducts: 68000,
            discountedPrice: 98000
        },
        {
            imgProducts: "imgVO/vococaobo3doikieutron.jpg",
            nameProducts: "Vớ cổ cao bộ 3 đôi kiểu trơn",
            priceProducts: 123000,
            discountedPrice: 176000
        },
        {
            imgProducts: "imgVO/vocothapbo2doikieudu.jpg",
            nameProducts: "Vớ cổ thấp bộ 2 đôi kiểu dù",
            priceProducts: 54000,
            discountedPrice: 78000
        },
    ];  
    $scope.cart = [];

    $scope.addToCart = function(product) {
        let inCard = false;
        for (let i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].nameProducts === product.nameProducts) {
                $scope.cart[i].quantity++;
                inCard = true;
                break;
            }
        }
        if (!inCard) {
            let productCopy = angular.copy(product);
            productCopy.quantity = 1;
            $scope.cart.push(productCopy);
        }
        console.log('Đã thêm sản phẩm vào giỏ hàng');
        $scope.totalPrice = $scope.getTotalPrice();
    };

    //Tính tổng tiền các sản phẩm có trong giỏ hàng
    $scope.getTotalPrice = function() {
        var total = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
        var item = $scope.cart[i];
        total += (item.priceProducts * item.quantity);
    }
        return total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    //Tăng sp lên 1
    $scope.increaseQuantity = function(item) {
        item.quantity += 1;
    };

    //Trừ sp đi 1
    $scope.decreaseQuantity = function(item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
    };
    
    //Tính số lượng có trong giỏ hàng
    $scope.getCartItemCount = function() {
        let count = 0;
        for (let i = 0; i < $scope.cart.length; i++) {
            count += $scope.cart[i].quantity;
        }
        return count;
    };

    //Xóa sp
    $scope.delete = function(index){
        $scope.cart.splice(index, 1);
        $scope.totalPrice = $scope.getTotalPrice();
    };
})
.run(function($rootScope,$timeout){
    $rootScope.$on('$routeChangeStart',function(){
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess',function(){
        $timeout(function(){
           $rootScope.loading = false;
        },1000);
    });
    $rootScope.$on('$routeChangeError',function(){
        $rootScope.loading = false;
        alert('Lỗi tải trang!');
    });
})
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'TrangChu.html?'+Math.random(),
    })
    .when('/logo',{
        templateUrl: 'TrangChu.html?'+Math.random(),
    })
    .when('/chitietsanpham',{
        templateUrl: 'chitietsanpham.html?'+Math.random(),
    })
    .when('/cart',{
        templateUrl: 'giohang.html?'+Math.random(),
        controller: 'cartController'
    })
    .when('/login',{
        templateUrl: 'login.html?'+Math.random(),
    })
    .when('/vo',{
        templateUrl: 'vo.html?'+Math.random(),
        controller: 'voController'
    })
    .otherwise({
        redirectTo: "/",
        template: '<h1>404 - Không tìm thấy trang!</h1>'

    })
})

.controller("cartController",function($scope){
    
})
.controller("voController", function ($scope) {
    $scope.now = new Date();
    //  THỰC HIỆN PHÂN TRANG: 4 SP 1 TRANG
    //  Trang 1: 0 1 2 3    -> bắt đầu từ 0
    //  Trang 2: 4 5 6 7    -> bắt đầu từ 4
    //  Trang 3: 8 9 10 11  -> bắt đầu từ 8
    //  Trang n:            -> bắt đầu từ 4*(n-1)
    $scope.limit = 9;
    $scope.page = 1;
    $scope.start = $scope.limit * ($scope.page - 1);
    $scope.totalPage = Math.ceil($scope.socks.length / $scope.limit);
    $scope.listPage = [];
    for (let i = 1; i <= $scope.totalPage; i++) {
        $scope.listPage.push(i);
    }
    $scope.changePage = function(trang){
        $scope.page = trang;
        $scope.start = $scope.limit * ($scope.page - 1);
    }
    $scope.isOrderSelected = false;
})
.filter("SearchProducts",function(){
    return function(input,keyword,attr){
        var output = [];
        if(keyword==undefined || keyword.length==0){
            output = input;
        }
        else{
            for(var i = 0; i<input.length; i++){
                for(var j = 0; j<attr.length; j++){
                    if(input[i][attr[j]].toString().toLowerCase().indexOf(keyword.toLowerCase())>=0){
                        output.push(input[i]);
                    }
                }
            }
        }
        
        return output;  
    }
})