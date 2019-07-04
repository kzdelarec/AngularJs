app.component('ocjeneProf', {

    template:`

        <h2 class="profil">{{c.ocjeneProf[0].profesor}}</h2>
        <h5 class="profil">Prosjek: {{c.ocjeneProf[0].prosjek}}</h5>
        <span class="profil">Ocjene({{c.ocjeneProf.length}}):</span>
        
        <div class="profil" ng-show="c.ocjeneProf.length < 1">Nema zapisa</div>
            
        <div ng-repeat="zapis in c.ocjeneProf">
            <div class="container-fluid">
                <div class="col">
                    <div class="col-md-4">
                        <div class="jumbotron" style="padding: 1rem 1rem;">
                            <div class="block">
                                <h4 class="block" style="padding-top: 15px;">
                                    {{zapis.student}}
                                </h4>
                            </div>
                            
                            <div class="right jumbotron" style="padding: 0rem 1rem;">

                            <fieldset class="rating" disabled>
                                <input type="radio" id="star5" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" value="5" /><label class = "full" for="star5"></label>
                                <input type="radio" id="star4" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" value="4" /><label class = "full" for="star4"></label>
                                <input type="radio" id="star3" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" value="3" /><label class = "full" for="star3"></label>
                                <input type="radio" id="star2" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" value="2" /><label class = "full" for="star2"></label>
                                <input type="radio" id="star1" name="ratingid{{zapis.id}}" ng-model="zapis.ocjena" value="1" /><label class = "full" for="star1"></label>
                            </fieldset>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <a class="profil" ui-sref="profesori">Povratak</a>
       
    `,
    controller:function($http, $stateParams, OcjeneService, $scope){

        this.ocjeneProf = OcjeneService.getZapiseZaProfesore($stateParams.x);
        this.id = $stateParams.x;

        this.$onInit=function() {
            this.id = $stateParams.x;
            this.ocjeneProf = OcjeneService.getZapiseZaProfesore(this.id);
        }
        $scope.$on('initOcjeneProf', (event, zapisi)=>{
            this.ocjeneProf = zapisi;
        });


    },
    controllerAs:'c'

});