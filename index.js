function newImage(src, left, bottom) {
    let image = document.createElement('img')

    image.src = src
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom

    document.body.append(image)
}

function newItem(src, left, bottom) {
    let item = document.createElement('img')

    item.src = src
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom

    document.body.append(item)

    item.addEventListener('dblclick', function () {
        item.remove()
    })

}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')

document.body.style.backgroundImage = 'url(assets/grass.png)'

/* ^ Technique taught by friend in the programming industry during a personal project. I couldn't figure out how to easily implement the bonus, so I used that.
No good, very bad way of doing this for the purposes of this assignment though, please contact and offer corrections if possible. Thanks! */