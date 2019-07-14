//Search input
const searchUser = document.getElementById('searchUser');

//Init Github Class
const github = new Github;
//Init UI Class
const ui = new UI;

//Search input event listener
searchUser.addEventListener('keyup', e => {
    //Get input Test
    const userText = e.target.value;

    if (userText !== '') {
        //Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User Not Found', 'alert alert-danger');

                } else {
                    //Show Profile
                    ui.showProfile(data.profile);
                    //Show Repo
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear Profile 
        ui.clearProfile();
    }


});