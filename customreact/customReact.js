const customRender = (element,container)=>{
    const htmlElement = document.createElement(element.type);
    htmlElement.innerHTML = element.children

    for(prop in element.props){
        if(prop === "children")   continue;
        htmlElement.setAttribute(prop,element.props[prop])
    };

    container.appendChild(htmlElement)
}

const element = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Visit www.google.com'
}
const mainContainer = document.getElementById('root')

customRender(element,mainContainer)