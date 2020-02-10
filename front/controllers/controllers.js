myApp.controller('ligneFraisController', function($scope,$route,$routeParams,$http){
	$scope.getlignefraiss = function(){
		$http.get('/api/LignesFrais/').then(function(response){
			$scope.LignesFrais = response.data;
		});
	};
	$scope.showlignefrais = function(){
		var id = $routeParams.id;
		$http.get('/api/LignesFrais/'+ id).then(function(response){
			$scope.LF = response.data;
		});
	};
	$scope.addlignefrais = function(){
		//var id = $routeParams.id;
		$http.post('/api/LignesFrais/', $scope.LF).then(function(response){
			//$scope.LF = response.data;
			window.location.href = '/';
		});
	};
	$scope.updatelignefrais = function(){
		var id = $routeParams.id;
		$http.put('/api/LignesFrais/'+ id , $scope.LF).then(function(response){
			//$scope.LF = response.data;
			window.location.href = '/';
		});
	};
	$scope.deletelignefrais = function(id){
		var id = id;
		$http.delete('/api/LignesFrais/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});