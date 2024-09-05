'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 760
			? '/assets/videos/smallHero.mp4'
			: '/assets/videos/hero.mp4'
	)

	const handleVideoSrcSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc('/assets/videos/smallHero.mp4')
		} else {
			setVideoSrc('/assets/videos/hero.mp4')
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleVideoSrcSet)

		return () => {
			window.removeEventListener('resize', handleVideoSrcSet)
		}
	}, [])

	useGSAP(() => {
		gsap.to('#hero', {
			opacity: 1,
			delay: 2,
		})
		gsap.to('#cta', {
			opacity: 1,
			y: -50,
			delay: 2,
		})
	}, [])

	return (
		<section className="nav-height relative w-full bg-black">
			<div className="flex-center h-5/6 w-full flex-col">
				<p id="hero" className="hero-title">
					iPhone 15 pro
				</p>

				<div className="w-9/12 md:w-10/12">
					<video
						className="pointer-events-none"
						autoPlay
						muted
						playsInline={true}
						key={videoSrc}
					>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>

			<div
				id="cta"
				className="flex translate-y-20 flex-col items-center opacity-0"
			>
				<Link href="#highlights" className="btn">
					Buy
				</Link>
				<p>from $199/month or $999</p>
			</div>
		</section>
	)
}

export default Hero
