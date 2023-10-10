// Import Packages
import { useState } from 'react';

// Import Modules
import { generator } from '../generator/index.js';
import { PasswordStrength } from '../PasswordStrength/index.jsx';

export const FormGenerator = () => {
	// use local state
	const [val, setVal] = useState('');
	const [rng, setRng] = useState(12);
	const [copied, setCopied] = useState(false);
	const [copiedFeedback, setCopiedFeedback] = useState('Copy');

	// set generated password to local state
	const gen = () => {
		return setVal(generator(rng));
	};

	// show generated password or show placeholder text
	const showPass = () => {
		if (val !== '') {
			return <>{val}</>;
		} else {
			return <span className="block text-sm font-semibold">click generate for a new password</span>;
		}
	};

	// change the range of the password
	const passwordRange = e => {
		return setRng(e.target.value);
	};

	// timing function to reset the status of the copied state
	const feedbackTimer = () => {
		// first set the copied state to true & set copied text status
		setCopied(true);
		setCopiedFeedback('Copied!');

		// then after 5 seconds, reset the copied state to false & copied text status to copy
		return setTimeout(() => {
			setCopied(false);
			return setCopiedFeedback('Copy');
		}, 5000);
	};

	// copy password to clipboard if there is a password generated
	const copyPswd = () => {
		if (val !== '') {
			return window.navigator.clipboard
				.writeText(val)
				.then(() => feedbackTimer())
				.catch(() => null);
		}
	};

	return (
		<div className="mx-auto px-12 md:px-18 lg:px-20">
			<div className=" py-4 px-10 my-40 rounded-lg bg-stone-300 ">
				<div className=" rounded-t-lg">
					<p className="text-2xl font-bold text-center text-black px-4 py-2">Password Generator</p>
					{/* <hr className="w-full border-black" /> */}
				</div>

				<div className="h-full px-8 pt-14 pb-6 text-black">
					<div className="font-medium text-center pb-6">
						<p className="text-2xl">{showPass()}</p>
						<hr className="mx-auto w-3/4 border-black" />
					</div>

					<div className="py-4">
						<p className="text-center text-sm">Password Length</p>
						<p className="text-center text-2xl font-bold">{rng}</p>
						<input
							className="w-full outline-none appearance-none rounded-lg h-1 accent-stone-900 cursor-pointer my-2 bg-stone-900"
							onChange={e => passwordRange(e)}
							type="range"
							name="password"
							id="password"
							value={rng}
							min={12}
							max={18}
							step={2}
						/>
					</div>

					<PasswordStrength rng={rng} />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black py-6 px-4 rounded-b-lg justify-items-center">
					<button
						onClick={() => gen()}
						className="block border border-black rounded-lg p-2 w-2/3 transition ease-in-out delay-100 hover:bg-emerald-700 hover:scale-110 hover:-translate-y-2 active:bg-stone-700 active:scale-110 active:-translate-y-2">
						Generate
					</button>
					<button onClick={() => copyPswd()} className="block border border-black rounded-lg p-2 w-2/3">
						{copiedFeedback}
					</button>
				</div>
			</div>
		</div>
	);
};
