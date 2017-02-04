var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
	return (
		<div className="top-bar">
			<div className="top-bor-left">
				<ul className="menu">
					<li className="menu-text">
						React Timer App
					</li>
					<li>
						<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
					</li>
					<li>
						<Link to="/" activeClassName="active-link">Countdown</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">Created by <a href="#">Enes YILMAZ</a></li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Navigation;