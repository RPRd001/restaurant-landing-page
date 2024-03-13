export default function Menu() {
    
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('container');
    menuContainer.classList.add('grid')

    const menuCard = document.createElement('div');
    menuCard.classList.add('card');
    menuCard.innerHTML = `
    <p>This is a delicatessen. Ummm</p>
    `

    menuContainer.appendChild(menuCard)

    return menuContainer

}