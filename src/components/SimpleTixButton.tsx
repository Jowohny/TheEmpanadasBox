import React, { useState } from 'react';

type SimpleTixWindow = Window & { createSimpleTixEmbed?: (...args: unknown[]) => void };

const APPLICATION_ID = 'ed4ae783-756e-4db7-b8b5-6a444deb7ed1';

const addSimpleTixInputs = () => {
	const inputs = {
		smt_hdnApplicationId: APPLICATION_ID,
		smt_hdnStoreName: 'Empanadas Box',
		smt_hdnDataUrl: 'https://embed.prod.simpletix.com/',
		smt_hdnEnableDigitalWallets: 'true',
	};
	for (const [id, value] of Object.entries(inputs)) {
		if (document.getElementById(id)) continue;
		const input = document.createElement('input');
		input.type = 'hidden';
		input.id = id;
		input.value = value;
		document.body.appendChild(input);
	}
};

const loadSimpleTix = () => new Promise<void>((resolve, reject) => {
	addSimpleTixInputs();

	if (!document.getElementById('simpletix-widget-css')) {
		const link = document.createElement('link');
		link.id = 'simpletix-widget-css';
		link.href = "https://embed.prod.simpletix.com/assets/widget/widget.min.css?t=2026.02.18";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}

	if (typeof (window as SimpleTixWindow).createSimpleTixEmbed === 'function') return resolve();

	let script = document.getElementById('simpletix-widget-js') as HTMLScriptElement | null;
	if (!script) {
		script = document.createElement('script');
		script.id = 'simpletix-widget-js';
		script.src = "https://embed.prod.simpletix.com/assets/widget/widget.min.js?t=2026.10.21";
		script.async = true;
		document.body.appendChild(script);
	}
	script.addEventListener('load', () => resolve(), { once: true });
	script.addEventListener('error', () => reject(new Error('SimpleTix failed to load')), { once: true });
});

type SimpleTixButtonProps = {
	eventId: string
	eventSlug: string
}

const SimpleTixButton = ({ eventId, eventSlug }: SimpleTixButtonProps) => {
	const [loading, setLoading] = useState(false);

	const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (loading) return;
		// React clears currentTarget once the handler yields, so hold on to it.
		const button = e.currentTarget;

		setLoading(true);
		try {
			await loadSimpleTix();
			(window as SimpleTixWindow).createSimpleTixEmbed?.(
				button,
				APPLICATION_ID,
				eventId,
				eventSlug,
				'Empanadas Box',
				'',
				'0'
			);
		} catch (err) {
			console.warn(err);
		} finally {
			setLoading(false);
		}
	};

  return (
    <div>
      <a
        href="#"
        role="button"
        className="simpletix-button-theme inline-block cursor-pointer whitespace-nowrap rounded-full! border-2! border-black/20! bg-[#bf8000]! px-6! py-3! font-mono! text-xs! font-semibold! uppercase! tracking-wide! text-white! shadow-lg transition-colors hover:bg-[#a36d00]! md:px-8! md:py-4! md:text-sm!"
        onClick={handleClick}
        data-url="https://embed.prod.simpletix.com/"
        data-enabledigitalwallets="true"
        data-origin="11"
        aria-busy={loading}
      >
        {loading ? 'Loading...' : 'Get Tickets'}
      </a>
    </div>
  );
};

export default SimpleTixButton;