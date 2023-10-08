// Import Packages
import { useState } from 'react';

// Import Modules
import { generator } from '../generator/index.js';

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
			return <i>generate password</i>;
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
		<div className="bg-white">
			<h1>Password Generator</h1>
			<p className="border border-black rounded-lg">{showPass()}</p>

			<div>
				<input onChange={e => passwordRange(e)} type="range" name="password" id="password" value={rng} min={12} max={18} step={2} />
				<label htmlFor="password">Password Length: {rng}</label>
			</div>

			<button onClick={() => gen()} className="block border border-black rounded-lg p-2">
				Generate
			</button>
			<button onClick={() => copyPswd()} className="block border border-black rounded-lg p-2">
				{copiedFeedback}
			</button>
		</div>
	);
};
