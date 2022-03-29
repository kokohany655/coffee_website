const button = document.querySelectorAll('.button')
let viewing = document.querySelector('.viewing')


function view(e ,a ,c ,d  ,b){
    const viewCard = document.createElement('div')
    viewing.appendChild(viewCard)
    const divImg = document.createElement('div')
    divImg.setAttribute('class', 'ImgBack');
    
    const Img = document.createElement('img')
    Img.setAttribute('src', `${a}`)

    const content = document.createElement('div')
    content.setAttribute('class', 'content')

    const Name = document.createElement('h1')
    Name.innerText = `${c}`
    const type = document.createElement('h3')
    type.innerText = `${d}`
    const description = document.createElement('h4')
    description.innerText ="Description"
    const descriptionContent = document.createElement('p')
    descriptionContent.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos suscipit cum animi nisi. Veritatis maiores sapiente officiis tenetur nostrum nisi. Beatae molestiae accusantium quasi voluptatum consequuntur veritatis quam deleniti nisi!"
    const size = document.createElement('h4')
    size.innerText="Size"
    const sizeButton = document.createElement('div')
    sizeButton.setAttribute('class' , 'sizeButton')
    const sizeS= document.createElement('a')
    sizeS.setAttribute('class' ,'Sizy')
    sizeS.innerText="S"
    const sizeM= document.createElement('a')
    sizeM.setAttribute('class' ,'Sizy')
    sizeM.innerText="M"
    const sizeL= document.createElement('a')
    sizeL.setAttribute('class' ,'Sizy')
    sizeL.innerText="L"
    sizeButton.append(sizeS,sizeM,sizeL)

    const bag = document.createElement('div')
    bag.setAttribute('class' , 'bag')
    const price = document.createElement('p')
    price.innerText =`${b}`
    const button = document.createElement('a')
    button.innerText="BUY"
    
    viewCard.append(divImg, content)
    divImg.appendChild(Img)
    bag.append(price, button)
    content.append(Name ,type ,description ,descriptionContent ,size ,sizeButton, bag)

}   


 