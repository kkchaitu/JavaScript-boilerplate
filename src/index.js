import './images/example.png';
import './styles/index.scss';
const log = (target, key, descriptor)=>{
  console.log(target);
  console.log(key);
  console.log(descriptor);
}

class HelloWorld {
  //decorators from ES7
  @log
  sayHello() {
    console.log('HelloWorld...');
  }

  render(){
    return `<div>Hello World 2021</div>`;
  }
}


window.onload = () => {
  var t = new HelloWorld();

  t.sayHello();
  t.render();
}

//app controller
const Controller = {
  exampleHandler: ev => {
    let t = new HelloWorld();

    document.body.innerHTML = t.render();
  }
}

// example of adding event handler to an element
// using jquery
$('#hello').on('click', Controller.exampleHandler);
