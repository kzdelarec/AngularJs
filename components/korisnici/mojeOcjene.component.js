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

                                <fieldset class="rating" >
                                    <input type="radio" id="star5{{zapis.id}}" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" ng-click="c.uredi(zapis)" value="5"/><label class = "full" for="star5{{zapis.id}}"></label>
                                    <input type="radio" id="star4{{zapis.id}}" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" ng-click="c.uredi(zapis)" value="4"/><label class = "full" for="star4{{zapis.id}}"></label>
                                    <input type="radio" id="star3{{zapis.id}}" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" ng-click="c.uredi(zapis)" value="3"/><label class = "full" for="star3{{zapis.id}}"></label>
                                    <input type="radio" id="star2{{zapis.id}}" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" ng-click="c.uredi(zapis)" value="2"/><label class = "full" for="star2{{zapis.id}}"></label>
                                    <input type="radio" id="star1{{zapis.id}}" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" ng-click="c.uredi(zapis)" value="1"/><label class = "full" for="star1{{zapis.id}}"></label>
                                </fieldset> 
                                    <i class="material-icons bad" style="cursor:default; margin:20px 0 0 5px;" title="obriši" ng-click="c.obrisi(zapis)">
                                        delete_forever
                                    </i>
                                
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

        this.uredi=function (zapis) {
            OcjeneService.urediOcjenu(zapis, this.user.id);
        }

        this.obrisi = function (zapis) {
            OcjeneService.obrisiOcjenu(zapis.id, this.user.id);
        }


    },
    controllerAs:'c'

});