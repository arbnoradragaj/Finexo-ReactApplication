import React from 'react';


const About = () => {
  return (
    <section class="about_section layout_padding">
  <div class="container">
    
    <div class="heading_container heading_center">
      <h2>About <span>Us</span></h2>
      <p>It is great that no less flattery, but either any pleasures, or the pleasures of the blessed things themselves</p>
    </div>
    <div class="row">
      
      <div class="col-md-6 img-box">
        <img src="images/about-img.png" alt="About Us" />
      </div>
      <div class="col-md-6 detail-box">
        <h3>We Are Finexo</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
        <p>
          Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
        </p>
        <a href="/" class="btn">Read More</a>
      </div>
    </div>
  </div>
</section>


  );
};

export default About;
