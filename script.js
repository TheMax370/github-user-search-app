let fetchInfo;
let mode = false;
let searchButton = document.getElementById('search-button');
let darkMode = document.getElementById('dark-mode');
let userInput = document.getElementById('search-username');
let profilePicture = document.getElementById('profile-picture');
let name = document.getElementById('name');
let userName = document.getElementById('username');
let date = document.getElementById('date');
let userBio = document.getElementById('bio');
let userRepos = document.getElementById('repos');
let userFollowers = document.getElementById('followers');
let userFollowings = document.getElementById('followings');
let userLocation = document.getElementById('location');
let userTwitter = document.getElementById('twitter');
let userWebsite = document.getElementById('website');
let userCompany = document.getElementById('company');
let userNotFound = document.getElementById('not-found');


searchButton.addEventListener('click', fetchUser)
darkMode.addEventListener('click', event => {
	mode = !mode;

	if (mode === true) {
		/*document.querySelector('body').style.backgroundColor = '#141D2F';
		document.getElementsByTagName('h1')[0].style.color = '#FFFFFF';
		document.getElementById('text-dark').innerHTML = 'LIGHT';
		document.getElementById('text-dark').style.color = '#90A4D4';
		document.getElementById('btn-icon').setAttribute('class', "fa-solid fa-sun-bright");
		document.querySelector('.searchbar').style.backgroundColor = '#1E2A47';
		document.getElementById('search-username').style.backgroundColor = '#1E2A47';
		document.getElementById('search-username').style.color = 'white';
		document.querySelector('.user-card').style.backgroundColor = '#1E2A47';
		document.getElementById('name').style.color = 'white';
		document.getElementById('date').style.color = '#FFFFFF';
		document.getElementById('bio').style.color = '#FFFFFF';
		document.querySelector('.user-follows').style.backgroundColor = '#141D2F';
		document.getElementsByTagName('h1')[3].style.color = 'white';
		document.getElementsByTagName('h1')[4].style.color = 'white';
		document.getElementsByTagName('h1')[5].style.color = 'white';
		document.getElementsByTagName('h2')[1].style.color = 'white';
		document.getElementsByTagName('h2')[2].style.color = 'white';
		document.getElementsByTagName('h2')[3].style.color = 'white';*/
		document.getElementById('css').setAttribute('href', "/css/dark-mode.css");
		document.getElementById('text-dark').innerHTML = 'LIGHT';
		
	} else {
		document.getElementById('css').setAttribute('href', "style.css");
		document.getElementById('text-dark').innerHTML = 'DARK';
	}

	
});

async function fetchUser() {
	fetchInfo = fetch(`https://api.github.com/users/${userInput.value}`)
		.then(response => response.json())
		.then(data => data)
		.catch(err => err);

	let userInfo = await fetchInfo;

	if (userInfo['message'] == 'Not Found') {
		userNotFound.style.display = 'block';
	} else {
		userName.innerHTML = `${userInfo['login']}`;
		name.innerHTML = `${userInfo['name']}` == 'null' ? name.innerHTML = `${userInfo['login']}` : name.innerHTML = `${userInfo['name']}`;
		profilePicture.setAttribute('src', `${userInfo['avatar_url']}`);
		date.innerHTML = `Joined ${userInfo['created_at']}`.substring(0, 16);
		userBio.innerHTML = `${userInfo['bio']}` == 'null' ? userBio.innerHTML = 'This profile has no bio.' : userBio.innerHTML = `${userInfo['bio']}`;
		userRepos.innerHTML = `${userInfo['public_repos']}`;
		userFollowers.innerHTML = `${userInfo['followers']}`;
		userFollowings.innerHTML = `${userInfo['following']}`;
		userLocation.innerText = `${userInfo['location']}` == 'null' ? userLocation.innerText = 'Not Available' : userLocation.innerText = `${userInfo['location']}`;
		userTwitter.innerText = `${userInfo['twitter_username']}` == 'null' ? userTwitter.innerText = 'Not Available' : userTwitter.innerText = `${userInfo['twitter_username']}`;
		userWebsite.innerText = `${userInfo['blog']}` == '' ? userWebsite.innerText = 'Not Available' : userWebsite.innerText = `${userInfo['blog']}`;
		//document.getElementById('link').setAttribute('href', userInfo['blog']);
		userCompany.innerText = `${userInfo['company']}` == 'null' ? userCompany.innerText = 'Not Available' : userCompany.innerText = `${userInfo['company']}`;
		userNotFound.style.display = 'none';
	}

}




/*reservar espacio para el switch mode*/





