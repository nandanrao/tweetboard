(function(){
	var socket = io.connect();

	var post = function(){
		var tweet = this.parentElement.parentElement.parentElement;
		// get values from form	
		var form = this.parentElement;	
		var id = form['id'].value;
		var name = form['name'].value;
		var text = form['tweet'].value;
		// validate this shit
		if (name == null || name == '' || text == null || text == ''){
			alert('fill out these fields!!')
			return
		};
		if( text.length > 140){
			alert("that's more that 140 characters!");
			return
		}
		// emit this shit
		socket.emit('newtweet', {id: id, name: name, text: text}); 
	}

	var reup = function(){
		var tweet = this.parentElement;

		// Hide current tweet. 
		for (var i=0, len=tweet.children.length; i<len; i++){
			tweet.children[i].style.display = 'none'
		}
		// create the form
		tweet.innerHTML += "\
		<div class='newtweet'> \
		<form> \
		<input style='display: none' name='id' id='hidden_field' value='"
		+ tweet.id.match(/[0-9]+/)[0]
		+ "'/> \
		<input name='name' id='name_field' placeholder='name' /> \
		<textarea type='text' name='tweet' id='tweet_field' placeholder='enter your new tweet here!'></textarea> \
		<button class='post' type='button'>post</button> \
		</form> \
		</div>";
		// add onclick to the 'post' button on the form
		tweet.getElementsByClassName('post')[0].onclick = post  
	} 

	// Initialize with tweets from database... 
	// for (var i=0, len=tweets.children.length; i<len; i++){
	// 	console.log(i+1);
	// 	document.getElementById('tweet' + (i+1)).getElementsByClassName('text')[0].onclick = reup;
	// }

	var draw = function(id, name, text){
		var tweet = document.getElementById('tweet'+id);
		var tweet_text = tweet.children[0];
		// console.log('yes', tweet.getElementsByClassName('newtweet')[0])
		if (tweet.getElementsByClassName('newtweet').length > 0){
			tweet.removeChild(tweet.getElementsByClassName('newtweet')[0]);
		}
		// show new tweet. 
		for (var i=0, len=tweet.children.length; i<len; i++){
			tweet.children[i].style.display = 'inline-block'
		}
		// set new tweet properties
		tweet_text.querySelectorAll('h2')[0].innerHTML = name;
		tweet_text.querySelectorAll('p')[0].innerHTML = text;
		tweet.getElementsByClassName('text')[0].onclick = reup;
		
	};

	// Build the TWEETS div
	var createEl = function(tag, cls, id){
		var el = document.createElement(tag);
		if(id) el.id = id;
		el.classList.add(cls);
		return el;
	}
	var createTweet = function(id){
		var text = createEl('div', 'text');
		text.appendChild(document.createElement('h2'));
		text.appendChild(document.createElement('p'));

		var tweet = createEl('div', 'tweet', 'tweet'+id);
		tweet.appendChild(text);
		return tweet;
	}
	var initialBuilder = function(len){
		var tweets = createEl('div', 'tweets', 'tweets');
		for(var i=0; i<len; i++){
			tweets.appendChild(createTweet(i+1))
		};
		return tweets;
	};
	
	// Build the initial tweets
	socket.on('init', function(data){
		document.body.appendChild(initialBuilder(data.length));
		window.requestAnimationFrame(function(){
			data.forEach(function(tweet){
				draw(tweet.slotId, tweet.name, tweet.text)
			});
		});
	});

	// Update page when a newtweet is referenced from server
	socket.on('newtweet', function(data){
		var id = data.id;
		var name = data.name;
		var text = data.text;
		draw(id, name, text);
	});

	// closes forms when you click the margins
	document.addEventListener("click", function (e) {
	 if (e.target.tagName === 'BODY' || e.target.tagName === 'HTML') {
	 	document.location.reload()
    }
	});

})();  