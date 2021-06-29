import React from "react";

export default function Extra() {
  return (
<>
 <div className="search-modal-wrap" data-scheme="dark">
		<div className="search-modal-box" role="dialog" aria-modal="true">

			<form method="get" className="search-form" action="#">
				<input type="search" className="search-field live-search-query" name="s" placeholder="Search..." value="" required />

				<button type="submit" className="search-submit visuallyhidden">Submit</button>

				<p className="message">
					Type above and press <em>Enter</em> to search. Press <em>Esc</em> to cancel.				</p>
						
			</form>

		</div>
	</div>
	
<div id="auth-modal" className="ts-modal auth-modal" aria-hidden="true">
	<div className="ts-modal-overlay"  data-micromodal-close>
		<div className="ts-modal-container" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
			<header className="ts-modal-header">
				<h2 id="auth-modal-title" className="visuallyhidden">
					Sign In or Register				</h2>

				<button className="close-btn" aria-label="Close modal" data-micromodal-close></button>
			</header>

			<div className="auth-modal-content auth-widget">
				<div className="auth-modal-login">
						<h1>Welcome Back!</h1>
	<p className="message text">Login below or <a href="#" className="register-link">Register Now</a>.</p>

		<div className="social-login">
		<div className="spc-social spc-social-c-icon">
						<a href="wp-login6fb0.html?action=wordpress_social_authenticate&amp;provider=Facebook&amp;mode=login" className="link s-facebook" rel="noopener" title="Login with Facebook">
				<i className="icon tsi tsi-facebook"></i>
				<span className="visuallyhidden">Facebook</span>
			</a>
						<a href="wp-login4385.html?action=wordpress_social_authenticate&amp;provider=Google&amp;mode=login" className="link s-google" rel="noopener" title="Login with Google">
				<i className="icon tsi tsi-google"></i>
				<span className="visuallyhidden">Google</span>
			</a>
						<a href="wp-login752e.html?action=wordpress_social_authenticate&amp;provider=Twitter&amp;mode=login" className="link s-twitter" rel="noopener" title="Login with Twitter">
				<i className="icon tsi tsi-twitter"></i>
				<span className="visuallyhidden">Twitter</span>
			</a>
					</div>

		<p className="social-label"><span>or with email</span></p>
	</div>
	<form method="post" action="https://smartmag.theme-sphere.com/good-news/wp-login.php" className="login-form">

		<div className="input-group">
			<input type="text" name="log" value="" placeholder="Username or Email" />
		</div>

		<div className="input-group">
			<input type="password" name="pwd" value="" placeholder="Password" />
		</div>

				
	<input type="hidden" name="user-cookie" value="1" />

	<input type="hidden" id="bbp_redirect_to" name="redirect_to" value="https://smartmag.theme-sphere.com/good-news/" /><input type="hidden" id="_wpnonce" name="_wpnonce" value="208b817f6d" /><input type="hidden" name="_wp_http_referer" value="/good-news/" />
		<button type="submit" name="wp-submit" id="user-submit" className="ts-button submit user-submit">Log In</button>

		<div className="footer">
			<div className="remember">
				<input name="rememberme" type="checkbox" id="rememberme" value="forever" />
				<label for="rememberme">Remember Me</label>
			</div>

			<a href="my-account/lost-password/index.html" title="Lost password?" className="lost-pass">
				Lost password?			</a>
		</div>

	</form>				</div>

									<div className="auth-modal-register">
							<h1>Register Now!</h1>

	<p className="message text">
		Already registered? <a href="#" className="login-link">Login</a>.	</p>

		<div className="social-login">
		<div className="spc-social spc-social-c-icon">
						<a href="wp-login6fb0.html?action=wordpress_social_authenticate&amp;provider=Facebook&amp;mode=login" className="link s-facebook" rel="noopener" title="Login with Facebook">
				<i className="icon tsi tsi-facebook"></i>
				<span className="visuallyhidden">Facebook</span>
			</a>
						<a href="wp-login4385.html?action=wordpress_social_authenticate&amp;provider=Google&amp;mode=login" className="link s-google" rel="noopener" title="Login with Google">
				<i className="icon tsi tsi-google"></i>
				<span className="visuallyhidden">Google</span>
			</a>
						<a href="wp-login752e.html?action=wordpress_social_authenticate&amp;provider=Twitter&amp;mode=login" className="link s-twitter" rel="noopener" title="Login with Twitter">
				<i className="icon tsi tsi-twitter"></i>
				<span className="visuallyhidden">Twitter</span>
			</a>
					</div>

		<p className="social-label"><span>or with email</span></p>
	</div>
	<form method="post" action="https://smartmag.theme-sphere.com/good-news/wp-login.php?action=register" className="register-form">

		<div className="input-group">
			<input type="text" name="user_login" value="" placeholder="Your Username" />
		</div>

		<div className="input-group">
			<input type="text" name="user_email" value="" placeholder="Your Email" />
		</div>

		
		<button type="submit" name="wp-submit" className="ts-button submit user-submit">Register</button>

		<div className="footer">
			<p>A password will be e-mailed to you.</p>
		</div>

	</form>					</div>
							</div>

		</div>			</div>			</div>
</>
    );
    }
