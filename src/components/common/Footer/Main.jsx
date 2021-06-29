import { FunctionComponent } from "react";
import Tag from "./tag";
import About from "./about";
import Posts from "./post";
import Social from "./Social";

const Main: FunctionComponent = () => {
    return (
    <>
    <footer className="main-footer cols-gap-lg footer-bold s-dark">

					<div className="upper-footer bold-footer-upper">
			<div className="ts-contain wrap">
				<div className="widgets row cf">
					
		<About />
		
		<div className="widget col-4 ts-block-widget smartmag-widget-posts-small">		
		<Posts />
		</div>
<div className="widget col-4 widget_recent_comments"><div className="widget-title block-head block-head-ac block-head block-head-ac block-head-b is-left has-style"><h5 className="heading">New Comments</h5></div><ul id="recentcomments"><li className="recentcomments"><span className="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' className='url'>John Doe</a></span> on <a href="post-format-gallery/index.html#comment-138">Royal Good Announces a New Album, Share New Single, Typhoonsy</a></li><li className="recentcomments"><span className="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' className='url'>Sam Doe</a></span> on <a href="samsung-announces-galaxy-buds-pro-most-premium-earbuds-yet/index.html#comment-128">Samsung Announces Galaxy Buds Pro, Most Premium Earbuds Yet</a></li><li className="recentcomments"><span className="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' className='url'>Jane Doe</a></span> on <a href="welcome-to-the-future-of-wordpress-with-gutenberg/index.html#comment-154">Welcome to the Future of SmartMag Gutenberg Editor</a></li><li className="recentcomments"><span className="comment-author-link"><a href='https://theme-sphere.com/' rel='external nofollow ugc' className='url'>Jane Doe</a></span> on <a href="latest-release-of-video-song-the-great-green-planet/index.html#comment-151">Latest Release of Video Song  &#8216;The Great Green Planet&#8217;</a></li></ul></div>				</div>
			</div>
		</div>
		
	
			<div className="lower-footer bold-footer-lower">
			<div className="ts-contain inner">

				

				
		<Social />
											
						<Tag />
						
				
				<div className="copyright">
					&copy; 2021 Pelviclitz. Designed by <a>Victor Amit</a>.				</div>
			</div>
		</div>		
		
	</footer>
	
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
	<div className="ts-modal-overlay" tabIndex="-1" data-micromodal-close>
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
export default Main;
