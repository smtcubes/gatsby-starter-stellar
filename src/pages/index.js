import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Ipsum sed adipiscing</h2>
                </header>
                <div class="wrap">
		              <div class="cube">
			              <div id="cubeFields"><div class="field mezo mezo1 szine1"><span>1</span></div><div class="field mezo mezo2 szine1"><span>2</span></div><div class="field mezo mezo3 szine1"><span>3</span></div><div class="field mezo mezo4 szine1"><span>4</span></div><div class="field mezo mezo5 szine1"><span>5</span></div><div class="field mezo mezo6 szine1"><span>6</span></div><div class="field mezo mezo7 szine1"><span>7</span></div><div class="field mezo mezo8 szine1"><span>8</span></div><div class="field mezo mezo9 szine1"><span>9</span></div><div class="field mezo mezo10 szine2"><span>10</span></div><div class="field mezo mezo11 szine2"><span>11</span></div><div class="field mezo mezo12 szine2"><span>12</span></div><div class="field mezo mezo13 szine2"><span>13</span></div><div class="field mezo mezo14 szine2"><span>14</span></div><div class="field mezo mezo15 szine2"><span>15</span></div><div class="field mezo mezo16 szine2"><span>16</span></div><div class="field mezo mezo17 szine2"><span>17</span></div><div class="field mezo mezo18 szine2"><span>18</span></div><div class="field mezo mezo19 szine3"><span>19</span></div><div class="field mezo mezo20 szine3"><span>20</span></div><div class="field mezo mezo21 szine3"><span>21</span></div><div class="field mezo mezo22 szine3"><span>22</span></div><div class="field mezo mezo23 szine3"><span>23</span></div><div class="field mezo mezo24 szine3"><span>24</span></div><div class="field mezo mezo25 szine3"><span>25</span></div><div class="field mezo mezo26 szine3"><span>26</span></div><div class="field mezo mezo27 szine3"><span>27</span></div><div class="field mezo mezo28 szine4"><span>28</span></div><div class="field mezo mezo29 szine4"><span>29</span></div><div class="field mezo mezo30 szine4"><span>30</span></div><div class="field mezo mezo31 szine4"><span>31</span></div><div class="field mezo mezo32 szine4"><span>32</span></div><div class="field mezo mezo33 szine4"><span>33</span></div><div class="field mezo mezo34 szine4"><span>34</span></div><div class="field mezo mezo35 szine4"><span>35</span></div><div class="field mezo mezo36 szine4"><span>36</span></div><div class="field mezo mezo37 szine5"><span>37</span></div><div class="field mezo mezo38 szine5"><span>38</span></div><div class="field mezo mezo39 szine5"><span>39</span></div><div class="field mezo mezo40 szine5"><span>40</span></div><div class="field mezo mezo41 szine5"><span>41</span></div><div class="field mezo mezo42 szine5"><span>42</span></div><div class="field mezo mezo43 szine5"><span>43</span></div><div class="field mezo mezo44 szine5"><span>44</span></div><div class="field mezo mezo45 szine5"><span>45</span></div><div class="field mezo mezo46 szine6"><span>46</span></div><div class="field mezo mezo47 szine6"><span>47</span></div><div class="field mezo mezo48 szine6"><span>48</span></div><div class="field mezo mezo49 szine6"><span>49</span></div><div class="field mezo mezo50 szine6"><span>50</span></div><div class="field mezo mezo51 szine6"><span>51</span></div><div class="field mezo mezo52 szine6"><span>52</span></div><div class="field mezo mezo53 szine6"><span>53</span></div><div class="field mezo mezo54 szine6"><span>54</span></div></div>
			                <div id="rotLayer">
		              	</div>
	            	  </div>
	             </div>
                <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
                adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
                Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Magna veroeros</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
