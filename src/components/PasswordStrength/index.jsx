export const PasswordStrength = state => {
	let { rng } = state;

	// convert string to number, since rng is a string after DOM changes
	rng = Number(rng);

	const strengthText = () => {
		switch (rng) {
			case 12:
				return <h2>Average</h2>;
			case 14:
				return <h2>Moderately Strong</h2>;
			case 16:
				return <h2>Strong</h2>;
			case 18:
				return <h2>Very Strong</h2>;
			default:
				return null;
		}
	};

	const gridSlider = () => {
		const defaultClass = 'h-1 w-3/4 rounded-lg bg-zinc-300';

		const lvl1SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-900';
		const lvl4SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-200';
		const lvl3SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-600';
		const lvl2SliderClass = 'h-1 w-3/4 rounded-lg bg-emerald-800';

		return (
			<div className="text-center mx-auto px-10">
				<div className="grid grid-cols-4">
					<div className={rng >= 12 ? lvl1SliderClass : defaultClass}></div>
					<div className={rng >= 14 ? lvl2SliderClass : defaultClass}></div>
					<div className={rng >= 16 ? lvl3SliderClass : defaultClass}></div>
					<div className={rng >= 18 ? lvl4SliderClass : defaultClass}></div>
				</div>
				{strengthText(rng)}
			</div>
		);
	};

	return <>{gridSlider()}</>;
};
