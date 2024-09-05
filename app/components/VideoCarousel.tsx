import { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
	const videoRef = useRef()
	const videoSpanRef = useRef()
	const videoDivRef = useRef()

	const [video, setVideo] = useState({
		isEnd: false,
		startPlay: false,
		videoId: 0,
		isLastVideo: false,
		isPLaying: false,
	})

	const { isEnd, isLastVideo, startPlay, videoId, isPLaying } = video

	useEffect(() => {}, [videoId, startPlay])

	return (
		<>
			<div className="flex items-center">
				{hightlightsSlides.map((list, i) => (
					<div key={list.id} id="slider" className="pr-10 sm:pr-20">
						<div className="video-carousel_container">
							<div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
								<video id="video" playsInline={true} preload="auto" muted>
									<source src={list.video} type="video/mp4" />
								</video>
							</div>

							<div className="absolute left-[5%] top-12 z-10">
								{list.textLists.map((text) => (
									<p key={text} className="text-xl font-medium md:text-2xl">
										{text}
									</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default VideoCarousel
