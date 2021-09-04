import React from "react";
import img1 from '../components/images2/app-store.png'
import img2 from "../components/images2/play-store.png"
import img3 from "../images/logo.svg"
export default function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>download our app</h3>
             
              <img src={img1} alt="hello" />
              <img src={img2} alt="hello" />
            </div>
            <div class="footer-col-2">
                <img src={img3} alt=""/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                necessitatibus non quam voluptas veritatis magni?
              </p>
            </div>
            <div class="footer-col-3">
              <h3>useful links</h3>
              <ul>
                <li>coopen</li>
                <li>blog post</li>
                <li>return policy</li>
                <li>join affilated</li>
              </ul>
            </div>
            <div class="footer-col-4">
              <h3>follow</h3>
              <ul>
                <li>facebook</li>
                <li>instagram</li>
                <li>twitter</li>
                <li>youtube</li>
              </ul>
            </div>
          </div>

          <p class="copyright"> Copyright--2021 Rahul Websites</p>
        </div>
      </footer>
    </div>
  );
}
