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
			return <span className="block text-sm font-thin">click "generate" for a new password</span>;
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
		<div className="mx-auto px-4">
			<div className="py-2 mx-auto mt-14 rounded-md bg-zinc-700 ">
				<div>
					<p className="text-2xl font-extrabold uppercase text-center text-lime-100 px-4 py-2">Password Generator</p>
				</div>

				<div className="w-full">
					<div className="h-full px-10 pt-10 pb-6 text-lime-100">
						<div className="font-bold text-center pb-2 md:pb-6">
							<p className="text-sm md:text-2xl">{showPass()}</p>
							<hr className="mx-auto border-lime-100 w-5/6 sm:w-3/6 md:w-2/6" />
						</div>

						<div className="mx-auto py-4">
							<p className="text-center text-sm font-light">Password Length</p>
							<p className="text-center text-2xl font-extrabold">{rng}</p>
							<div className="mx-auto w-4/6 sm:w-2/6">
								<input
									className="w-full outline-none appearance-none rounded-lg h-1 accent-lime-300 cursor-pointer my-2 bg-lime-300"
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
						</div>

						<PasswordStrength rng={rng} />
					</div>
				</div>

				<div className="grid grid-cols-1 justify-items-center gap-4 text-lime-100 border-lime-100 py-4 px-2 sm:grid-cols-2">
					<button onClick={() => gen()} className="w-4/6 block border rounded-lg p-2 sm:justify-self-end sm:w-3/6 md:w-2/6">
						Generate
					</button>
					<button onClick={() => copyPswd()} className="w-4/6 block border rounded-lg p-2 sm:justify-self-start sm:w-3/6 md:w-2/6">
						{copiedFeedback}
					</button>
				</div>
			</div>
		</div>
	);
};

// transition ease-in-out delay-100 hover:bg-lime-300 hover:text-zinc-800 hover:border-zinc-800 hover:scale-110 hover:-translate-y-1 active:scale-110 active:-translate-y-2 active:bg-lime-300 outline-none
