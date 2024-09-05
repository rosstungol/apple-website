import { navLists } from '../constants'

export const Navbar = () => {
	return (
		<header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
			<nav className="screen-max-width flex w-full">
				<img src="/assets/images/apple.svg" alt="Apple" />

				<div className="flex flex-1 justify-center max-sm:hidden">
					{navLists.map((nav) => (
						<div
							key={nav}
							className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
						>
							{nav}
						</div>
					))}
				</div>

				<div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
					<img src="/assets/images/search.svg" alt="search" />
					<img src="/assets/images/bag.svg" alt="bag" />
				</div>
			</nav>
		</header>
	)
}

export default Navbar
