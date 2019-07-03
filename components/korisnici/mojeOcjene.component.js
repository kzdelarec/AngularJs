app.component('mojeOcjene', {

    template:`

        <span class="profil">Moje ocjene({{c.ocjeneStud.length}}):</span>
        
        <div class="profil" ng-show="c.ocjeneStud.length < 1">Nema zapisa</div>
            
        <div ng-repeat="zapis in c.ocjeneStud">
            <div class="container-fluid">
                <div class="col">
                    <div class="col-md-4">
                        <div class="jumbotron" style="padding: 1rem 1rem;">
                            <div class="block">
                                <h4 class="block" style="padding-top: 15px;">
                                    {{zapis.profesor}}
                                </h4>
                            </div>
                            
                            <div class="right jumbotron" style="padding: 0rem 1rem;">

                            <fieldset class="rating" disabled>
                                <input type="radio" id="star5" name="rating" ng-model="zapis.ocjena" value="5" ng-click="c.click(c.post.id, 5)"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star4" name="rating" ng-model="zapis.ocjena" value="4" ng-click="c.click(c.post.id, 4)"/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star3" name="rating" ng-model="zapis.ocjena" value="3" ng-click="c.click(c.post.id, 3)"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                <input type="radio" id="star2" name="rating" ng-model="zapis.ocjena" value="2" ng-click="c.click(c.post.id, 2)"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star1" name="rating" ng-model="zapis.ocjena" value="1" ng-click="c.click(c.post.id, 1)"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                            </fieldset>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    `,
    controller:function($http, OcjeneService, AuthenticationService, $scope){

        this.user=AuthenticationService.getUser();
        this.ocjeneStud = OcjeneService.getMojeOcjene(this.user.id);

        this.$onInit=function() {
            this.ocjeneStud = OcjeneService.getMojeOcjene(this.user.id);
        };

        $scope.$on('initOcjeneStud', (event, zapisi)=>{
            this.ocjeneStud = zapisi;
        });


    },
    controllerAs:'c'

});