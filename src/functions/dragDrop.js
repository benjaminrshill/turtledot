export let onDragStart = (event) => {
    touchData.item = event.currentTarget.id;
}

export let onDragOver = (event) => {
    event.preventDefault();
    let movedItem = document.getElementById(touchData.item),
        movingOver = event.currentTarget,
        movedParent = movingOver.parentNode;
    if (movedParent.dataset.dragweek === movingOver.dataset.dragweek) {
        if (movingOver === movedItem) { // prevent dropping on self
            event.dataTransfer.dropEffect = 'none';
        } else if (movedItem.dataset.dragweek === movingOver.dataset.dragweek) {
            movingOver.classList.add('scooch');
            event.dataTransfer.dropEffect = 'move';
        }
    }
}

export let onDragExit = (event) => {
    event.currentTarget.classList.remove('scooch');
}

export let onDrop = (event) => {
    event.preventDefault();
    let dropState = [...this.state.images],
        listState = [...this.state.list],
        movedItem = document.getElementById(touchData.item),
        movedParent = movedItem.parentNode,
        droppingOn = event.currentTarget,
        droppingParent = event.currentTarget.parentNode;
    droppingOn.classList.remove('scooch');
    if (droppingOn.classList.contains('imageScrollContainer')) { // if moving from gallery to list, splice at row/position and push to list
        const imageToMoveFromGallery = dropState[+movedParent.dataset.index][+movedItem.dataset.index];
        dropState[+movedParent.dataset.index].splice(+movedItem.dataset.index, 1);
        listState.push(imageToMoveFromGallery);
    } else if (droppingOn.classList.contains('newGalleryPage')) { // if dropping on an empty row...
        if (movedItem.classList.contains('galleryImage')) { // ...from gallery, splice at row/position, push to row
            dropState[+droppingOn.dataset.index].push(dropState[+movedParent.dataset.index][+movedItem.dataset.index]);
            dropState[+movedParent.dataset.index].splice(+movedItem.dataset.index, 1);
        } else if (movedParent.classList.contains('imageScrollContainer')) { // ...from list, splice at list position, push to row
            dropState[+droppingOn.dataset.index].push(listState[+movedItem.dataset.index]);
            listState.splice(+movedItem.dataset.index, 1);
        }
    }
}
