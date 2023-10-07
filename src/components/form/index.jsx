// Import Packages
import { useState } from 'react';

// Import Modules
import { generator } from '../generator/index.js';

export const FormGenerator = () => {
	// use local state
	const [val, setVal] = useState('');
	const [rng, setRng] = useState(6);
	const [copy, setCopy] = useState('');

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

	// copy password if there is a password generated
	const copyPswd = () => {
		if (val !== '') {
			return setCopy(val);
		}
	};

	if (copy !== '') {
		window.navigator.clipboard
			.writeText(copy)
			.then(() => 'success')
			.catch(() => 'unsuccessfull');
	}

	return (
		<div className="bg-white">
			<h1>Password Generator</h1>
			<p className="border border-black rounded-lg">{showPass()}</p>

			<div>
				<input onChange={e => passwordRange(e)} type="range" name="password" id="password" value={rng} min={6} max={30} step={3} />
				<label htmlFor="password">Password Length: {rng}</label>
			</div>

			<button onClick={() => gen()} className="block border border-black rounded-lg p-2">
				Generate
			</button>
			<button onClick={() => copyPswd()} className="block border border-black rounded-lg p-2">
				Copy
			</button>
		</div>
	);
};
