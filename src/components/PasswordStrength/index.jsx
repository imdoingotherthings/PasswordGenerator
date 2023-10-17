export const PasswordStrength = state => {
	let { rng } = state;

	// convert string to number, since rng is a string after DOM changes
	rng = Number(rng);

	const strengthText = () => {
		switch (rng) {
			case 12:
				return 'Average';
			case 14:
				return 'Moderately Strong';
			case 16:
				return 'Strong';
			case 18:
				return 'Very Strong';
			default:
				return null;
		}
	};

	const gridSlider = () => {
		const defaultClass = 'h-1 w-3/4 rounded-lg bg-zinc-400';

		const lvl1SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-900';
		const lvl2SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-800';
		const lvl3SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-600';
		const lvl4SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-200';

		return (
			<div className="text-center mx-auto w-3/6 sm:w-2/6 pt-2">
				<div className="grid grid-cols-4 justify-items-center">
					<div className={rng >= 12 ? lvl1SliderClass : defaultClass}></div>
					<div className={rng >= 14 ? lvl2SliderClass : defaultClass}></div>
					<div className={rng >= 16 ? lvl3SliderClass : defaultClass}></div>
					<div className={rng >= 18 ? lvl4SliderClass : defaultClass}></div>
				</div>
				<p className="font-bold text-xs pt-4">{strengthText(rng)}</p>
			</div>
		);
	};

	return <>{gridSlider()}</>;
};
