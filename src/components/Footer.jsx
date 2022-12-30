import React from "react"
import "./Footer.css"
import { AiTwotonePhone } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
// Phone facebook twitter github
function Footer(){
    return (
      <div class="social-buttons">
      <a href="tel:929-300-8695" class="social-button social-button--codepen" aria-label="CodePen">
        <AiTwotonePhone />
      </a>
      <a href="https://www.facebook.com/dewen.ce.3" target="_blank" class="social-button social-button--facebook" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="social-button social-button--twitter" aria-label="Twitter">
        < BsTwitter />
      </a>
      <a href="#" class="social-button social-button--snapchat" aria-label="Snapchat">
        <BsSnapchat />
      </a>
      <a href="https://github.com/cxfydhcg" target="_blank" class="social-button social-button--github" aria-label="GitHub">
        <AiFillGithub />
      </a>
    </div>
    
    )
}

export default Footer