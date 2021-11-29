	const languageData = {
		code: 'en',
		name: 'English',
		rtl: false,
		isDefault: true,
		};

	class Language {
	#code = 'en';
	#name = 'English';
	#rtl = false;
	#isDefault = true;

	constructor ({code, name, rtl, isDefault}) {
	this.#code = code;
	this.#name = name;
	this.#rtl = rtl;
	this.#isDefault = isDefault;
	}

	get getCode() {
	return this.#code;
	}
	get getName() {
	return this.#name;
	}
	get getisRtl() {
	return this.#rtl;
	}
	get getisDefaulte() {
	return this.#isDefault;
	}
	}

	const language = new Language(languageData)
	console.log(language)