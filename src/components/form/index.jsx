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
			return (
				<small>
					<i>generate password</i>
				</small>
			);
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
		<div className="mx-auto px-10">
			<div className="bg-white p-6 my-40 rounded-lg">
				<div className="my-2">
					<h1>Password Generator</h1>
					<hr className="w-full" />
				</div>

				<p className="">{showPass()}</p>

				<div className="my-2">
					<small>
						<b>Password Length: {rng}</b>
					</small>
					<input className="w-full" onChange={e => passwordRange(e)} type="range" name="password" id="password" value={rng} min={12} max={18} step={2} />
				</div>

				<PasswordStrength rng={rng} />

				<button onClick={() => gen()} className="block border border-black rounded-lg p-2">
					Generate
				</button>
				<button onClick={() => copyPswd()} className="block border border-black rounded-lg p-2">
					{copiedFeedback}
				</button>
			</div>
		</div>
	);
};
