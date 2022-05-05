function changePage(side){
    model.currentPage = side;

}



function updatePage(){
    if(model.currentPage == 'home') homePage();
    if(model.currentPage == 'aboutMe') about();
    if(model.currentPage == 'work') myWork();
    if(model.currentPage == 'randomFacts') facts();
    showApp();
}
