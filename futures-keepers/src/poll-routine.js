class PollRoutine {
	constructor(fn, ms) {
		this.fn = fn;
		this.ms = ms;
	}

	run() {
		this.timeout = setTimeout(() => {
			this.fn();
		}, this.ms);
	}

	cancel() {
		clearTimeout(this.timeout);
	}
}

module.exports = PollRoutine;
