


function Projects (props){
    

    return (
        <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">


            {props.arr.map(el=>  <div className="project-card">
            <img src={el.img} alt="project" />
            <h3>{el.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>)}

          
          
        </div>
      </section>
    )
}
export default Projects