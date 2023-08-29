document.querySelector('.enter-langit').addEventListener('mouseover', () => {
    document.querySelector('.jesus').classList.add('hover')
})
document.querySelector('.enter-langit').addEventListener('mouseout', () => {
    document.querySelector('.jesus').classList.remove('hover')
})


const audio = new Audio('audio/bgm.mp3')

document.querySelector('.enter-langit').addEventListener('click', () => {
    open('https://tinyurl.com/gate-to-heaven')
	playBGM()
})

async function playBGM() {
	while (true) {
		await audio.play()
	}
}