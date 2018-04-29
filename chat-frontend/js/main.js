window.onload = () => {
	axios.get('http://localhost:8080/')
		.then(({ data }) => document.getElementById('heading').innerText = data);
		 //init;
}

// function init(){
//     //Create a header
//     var headerMenue = document.createElement("div");
//     headerMenue.class = "headerMenue";
//     var wrapper = document.createElement("div");
//     wrapper.id = "wrapper";
//     var logo = document.createElement("div");
//     logo.class = "logo";
//     logo.innerHTML = '<img src="images/logo.jpg">';
//     var searchBox = document.createElement("div");
//     searchBox.class = "searchBox";
//     var form = document.createElement("form");
//     form.innerHTML = '<input type="text" name="q" size="60" placeholder ="Search..." />';
//     form.action = 'search.html';
//     form.method ='GET';
//     form.id = 'search';
//     var menu = document.createElement("div");
//     menu.id = "menu";
//     menu.innerHTML = '<a href="index.html" />Home</a><a href="#" onclick="document.getElementById("login").style.display = ''" />Log in</a><a href="#" onclick="document.getElementById("signup").style.display = ''" />Sign up</a>';
//     var send = document.createElement("ul");
//     var form = document.createElement("form");
//     form.action = '';
//     form.innnerHTML = '<input id="m" autocomplete="off" /><button>Send</button>';
//     var footer = document.createElement("div");
//     footer.id = "footer";
//     footer.innnerHTML = '<p> &copy; 2018 Julia Gabajova for <a href="http://www.mdx.ac.uk/">Middlesex University</a></p>';
//     var signup = document.createElement("div");
//     signup.id = "signup";
//     var register = document.createElement("div");
//     register.class = "register";
//     var header = document.createElement("h2");
//     var form_group = document.createElement("div");
//     form_group.class = "form_group";
//     form_group.innerHTML = '<label><b>Name: </b></label><input type="text" id = "name" placeholder="Enter User your Name" name="Name" required>';
//     form_group.innerHTML = '<label><b>User ID: </b></label><input type="text" id = "userId" placeholder="Enter User ID" name="User ID" required>';
//     form_group.innerHTML = '<label><b>Email address: </b></label><input type="text" id = "emailAddress" placeholder="Enter Email" name="email" required>';
//     form_group.innerHTML = '<label><b>Password: </b></label><input type="password" id = "password" placeholder="Enter Password" name="psw" required>';
//     var button = document.createElement("button");
//     button.onclick = "signup()";
//     var para = document.createElement("p");
//     para.id = "result";
//     var span = document.createElement("span");
//     span.onclick = "document.getElementById('signup').style.display = 'none'";
//     span.innerHTML = "close";
//     var login = document.createElement("div");
//     login.id = "login";
//     var login2 = document.createElement("div");
//     login.class = "login";
//     var header = document.createElement("h2");
//     form_group.class = document.createElement("div");
//     form_group.innerHTML = '<label><b>User ID: </b></label><input type="text" id = "loginUserId" placeholder="Enter Username" name="uname" required>';
//     form_group.innerHTML = '<label><b>Password: </b></label><input type="password" id = "loginPassword" placeholder="Enter Password" name="psw" required>';
//     var button2 = document.createElement("button");
//     button2.onclick = "signup()";
//     var para2 = document.createElement("p");
//     para2.id = "loginFailure";
//     var para3 = document.createElement("p");
//     para3.id = "log_In";
//     var span2 = document.createElement("span");
//     span2.onclick = "document.getElementById('login').style.display = 'none'";
//     span2.innerHTML = "close";


//     //Get a reference to the document body
//     var docBody = document.getElementsByTagName("body")[0];//Only one body


//     //Add HTML to the page (Appending parent tag to the child tag)
// 	headerMenue.appendChild(wrapper);
// 	wrapper.appendChild(logo);
// 	logo.appendChild(searchBox);
// 	logo.appendChild(form);
// 	searchBox.appendChild(menu);
// 	docBody.appendChild(headerMenue);
// 	messages.appendChild(form);
// 	signap.appendChild(register);
// 	register.appendChild(form_group);
// 	login.appendChild(login);
// 	login.appendChild(form_group);

//     //Call function to add list of users
//     loadUserList();
// }