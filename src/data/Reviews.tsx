export interface Review {
	pfp: string
	name: string
	message: string
	images: string[]
	link: string
}

const Reviews: Review[] = [
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjXJNy6K3H7w3WkNbNpG92bH1H4k6kyc3u_Wk3lzqC20WjRSr1FwfA=s64-c-rp-mo-ba5-br100',
		name: 'Skylar Walker',
		message: 'here\’s an updated photo of their menu & drink selection! we ordered two 3 piece combos and it was perfectly filling. we tried 6 different ones and they were all absolutely delicious, i don\’t think you can go wrong. we will definitely be returning!',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lEQFSjWw0-vTqCqZxLXBC5d4X7qIxs7sZ-Klk20HLu0F5TnrQhcU5LF4UrMnR_H6y6W8TS5XdJSXarwpPHeynKmXTrfqs6ts1VBQp7mGGP-dEqTpCAOAZw5ikjboVbC2UbB-qEhBClUpgAft=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lEQRrRh0I9UWrYocM-7aq23YB7Rtd8Y2zMtmDEC7uEgkvkWSeFERESVO-aGziTzB1SF5NvBxle4b9onfdd3rfYnAdzAOkZHqVWo8MNDycJVcHo3rng54cWqPXFnPx1SuRK-E5t5Dk2Md3riB=s250-p-k'
		],
		link: 'https://share.google/b1UEqISDdQw0Geif6'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjVgyQb2wEacZBWOQ0DlocbYTOixsUfjKD34hJakTOYJQN4qGSgF=w72-h72-p-rp-mo-ba3-br100',
		name: 'Chelsea Mead',
		message: 'We discovered Empanada’s Box while having a pre dinner cocktail at Homemakers Bar, and were hooked immediately. After realizing we could pick up frozen empanadas and save them, we cannot be stopped. One of the best dinners we had this fall was getting a 12 empanadas surprise box, and sharing amongst 3 of us, and basically having empanada roulette. All of them have been amazing and weird in the best way. I think my top favorites would be the Jamaica, Philly, and Mumbai. Also the noodles are a must.',
		images: ['https://lh3.googleusercontent.com/geougc-cs/AMG9lES4pT3B3aUOdCI5bo9vLCC89mC-2vUwBy4_P-ciIxvd_euZ7C_A0uNBpKOkBMxCOPGv3a6ND-HMnk7bek-h_WmWQGqv1SyIJyFu7hvmAbnRbA9C6wUTw7hizzgYdi10m5qIcws7PqxbgTFY=s250-p-k'],
		link: 'https://share.google/DDx4247W2rm87OPnq'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a/ACg8ocLYxhZbjEAR0COrwc8dZuF5Mb6I_6Z-72TaGpekOaM2kIf2HQ=s64-c-rp-mo-ba2-br100',
		name: 'Faye Kleinwatcher',
		message: 'Have been wanting to try these for a while. The empanadas were delicious. Warm, soft and flaky, tasty fillings. My mom had the noodle salad and said it was very good. The table and chair height/ratio make it a little awkward to sit at comfortably. But otherwise a good find and will be going back!',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lEQeLpn9s8AJzFdAACsozjNXnVVLTA5CxM_rIfIbR_JcH1pDkaXBZxNRFr2Y46LrU6S2A0sn5TTyGXZrr2rG72jQXnSFJUhI2ygksIzg-aXYHGZlRGnEx8tUNVUyRN7laokZi1DmZeabnJRw=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lERjW0MwEnYFPe1U7fmxvebsx-OlGcTCkvCygrwPAS_o1RBGTzLawA5uRcWNw7p_YR2GkP7se6KCFxucXIuKYw5p4V-4pgRcwtW72uU35CCed-5JmezcUwAiErEUFEa3WnLLGWW8f2F3zQM=s250-p-k'
		],
		link: 'https://share.google/hjs6NU36YdzeIfOXk'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjU41xOXLOFWbCSFYmAxFCgOtHI3bgEYpdh_2Bev-ZaZ8Ua-cF5J=s64-c-rp-mo-ba3-br100',
		name: 'Jessica Arriaga',
		message: 'This is a cute place with a great atmosphere to have amazingly delicious empanadas. They have choices between beef, pork, chicken, veggie, vegan, and sweet. Their quinoa salad is great too. I enjoyed them so much that I brought home (on a plane) 8 frozen ones. They were so nice about it and gave me a freezer bag to use so that they would make it back home safely. They reheat nicely too. Next time I\’m back in the area, I\’m coming back.',
		images: ['https://lh3.googleusercontent.com/geougc-cs/AMG9lEQA7hV4cSIvVnwZXm9ZP6DswyMx2vx6sATmloxEvKT2jHQ2Vo_HsG7cCy21_YKUmVDgEHt0yCHH2JQSm5AbVlMXaKsl4afgtQGQxv-r1fS56RcX5B-wWo8aeyD-9DqlIuuka2McLuIjNAmP=s250-p-k'],
		link: 'https://share.google/JfAqGcwcvhMu7YLce'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjU-F6h-a9URMzRITjao8jXwX89a9Na72A_tsrD03T6Z9JeRFl3S=s64-c-rp-mo-ba5-br100',
		name: 'Will Soto',
		message: 'This place is a gem. The owners are Argentinian with Lucas as their front person. Great service! The food is through the roof good. They cover beef empanadas from different regions of the world. And they do it well. The flavors are on point They definitely have a special brand of their own. Highly recommended!!',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lER3nut_Ba9X8_vvOXYxfuPLCs8cQvCTrapSEUQe6cIxYskuzQd-TatwwZNobRw51V6TKpq9xlA8ZyOzQhRyMnMEG9nP_lI6TfdO2ffK6eOWBIKk0p0W1EcwTqJ6mvfNjmD9bqYRIA=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lETSFZ9Xi5-y6HCZehy6cjU4TJHcqDZ2j6a8C4Ayy41V0wvFOYqG9BMv6wHisMCzz6mOI2H1v7EPgeAkP9qgGbg1hvbxq_3eIMbxlq-r0eIUnHRha373aNZSfb083KoGmO5k7eZV=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lERA1r5a9dq1Iwd9GNqWmEtZ6nhLQEBA8N9dMdkuv6nyov2uQeS-8xFzPTYpcJGEexPD6vEheO1g9rJ-h_9Y6CIrfL5guFibh3RvO-4XsPAcHmkyVIu9WwGkiHzORniUZS3eVCUi=s250-p-k'
		],
		link: 'https://share.google/0ptioOaWcG3VuX5jj'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjWZPti-1D9eAzlMu5vCILUnvYe5R78WO0bN5ms-SUlro4csexH4tA=s64-c-rp-mo-ba6-br100',
		name: 'James Scott',
		message: 'Easily one of the best spots in town for lunch or carryout! They have so many great flavors, you\'re guaranteed to find something no matter what you\'re craving! I\'m a particular fan of the Miami and Singapore, though you honestly can\'t go wrong with any of the choices. Save room for dessert as they have some great dessert empanadas (the banana is my favorite) as well as some traditional cookies. The mate makes a great beverage choice, though they do have sodas as well. Staff is also super friendly, they patiently talked me through the different flavors while I was making my choices (I was ordering for a large group) and even helped me carry everything to the car! I will absolutely be back and can\'t recommend them enough!',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lEQlSb03uHvVbqxtWqmH_bW0VPfYF3lB2Y0Kj1q69SYWGihQlRfO9VaWRxcThdxNvEDx7vTmjtEKJSh-25zMujKaSloACwocDrokltMQuuutSTtova8O-UgyY4FnhjXSlFUTiqukXg=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lERLAQGQEcllbEAnZUxGWUwOVERHcqg0AzmoiYQZsHbYSmiubx4Icbmq311aX8HDKgTQPT9IiId5U6ThLX5-bgoDEJTU68xcDyeMVyQyYdQ8nhwAW5IzP-IY52VDcPK7-fuIpMKfXg=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lERloo9MwGIw4zIH8MLiQVcgHVUXXxEJQJN3bHbpD2v0uQfJ4gI5nu9tGRAJytHdvgimrE72JGijTalbuXjj2TpoSlud5xIaDxl8MeocWXUijqCV48ZtIfyDWkTd3ObWYr-ADzrT=s250-p-k'
		],
		link: 'https://share.google/wr9jziF4t239lIk38'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjVgvJLS1AUSz-ZOhta8Xpma4B2h69Icy1ntcINtWwAEKZ_MmEus=s64-c-rp-mo-ba4-br100',
		name: 'Norf Norf',
		message: 'My wife and I have been visiting this location since they opened after meeting the owners at a Cincinnati Food Festival years ago. The empanada\'s are amazing and a must try for anyone passing by or around the area.',
		images: ['https://lh3.googleusercontent.com/geougc-cs/AMG9lERg4OJEcZnuYzsxs8qNJpOTHtSjdfVAgREIibMJIPgTWXG5LtuCKeXiBteRcP-96s6GTGZ7ySPoKgJDMVUIDGiOnH2ei41Sff3bqB0V7IVnUs2tmokU6CpDMY967hjLHz4l1RWSfwDIMGJx=s250-p-k'],
		link: 'https://share.google/IoI3cHnrICgafWDGg'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjUInUtcaHb3SgRHQEkGzcU6MBKSgXlRJR8wnr7hBlZrS0WDJTZZ=s64-c-rp-mo-ba3-br100',
		name: 'Pete Regal',
		message: 'The empanadas are fantastic. I lived in Miami/South Florida and these are on par or better than any I had there. I like that they are clearly marked so you know what flavor you are eating. Also got a box of 8 to go.',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lESBCvZN7QVHRpncVbPRLvX_8-_WXQeacLlUrYnjQgP_nJNQ2_0HZCljh679YHu8hZ2PozwyejFrIRoJdKc6Rfzmei8WbVvTQgFxQoYBSEENXRQR9R3bIAqI0bJKhAR6FH9VLnRg=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lERC4CH7pg9zIgVRNbux0Ml6qhMQph6jDY6kfja16QhCmdpq1wIxzTtfUh5YgYznxe2Pt2B8zQaPhe5IJ8NN9fkZ2nKvL1F-o21woFMXoqscKhWosJghX-f6rZPkO1xIypttqfrN7Q=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lET27VDsywcVie-Z78Uh-Lv479pxrAlwm_IOryPbz7-AMBHprusICtRemxX9Hx5Dmb1yG1nmBziQ2BJkl-SP99ejVtPaFZlX1RsXiLjfPDibm5Ic1FyU25q0LqO34KyJ9ucjv14o=s250-p-k'
		],
		link: 'https://share.google/DM8MsWajytWiivxXE'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjVFBfa0S3QXEBlTiN8Kd8Ob5C4A017KIHKiT-zt6qMERbYtaOUT_w=s64-c-rp-mo-ba4-br100',
		name: 'Chell McKinnie',
		message: 'Best flavor packed empanadas I\'ve had in this area. Very tasty veggie rice & lemon shrimp rice. Warm homemade chips & dip also taste great. Everything I had was delicious. They even have frozen empanadas for you to store and/or prepare at home. Great people, atmosphere & location. Dine inside/outside or take-out. You can even have it delivered. It\'s definitely worth every penny.',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lESN5HUx5xL_ScATkbzlwPPG0qpQD2c4o1YPkNcX6SvBfu2S9BT1PucQ6cnok6qSGsKz_-BILVb9E_aKs9p0BXZvseNrswEcXkTpbP9bB7nwBBbcfltX9H8RPfhgx5C9PjtqO6ji=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lETNfWyMLO66MA68GOksIo25312KVmp8xvhHqVloFI2V6URIHMOvrgOlHE_VHu1vo4dUTi-jafP6VfvvfkrF4SPdZo9X8OOYZWwegP0KkODp7iX1cH2XWalGkWa_A3z2c6fNrXRe=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lES490RBcyAdMLWq4xsyuiZ3P5S3KeoHLSGmfYEs2j48e6_CkyUq5AvKVw4rpi7FBlGDs9Cio3KqvJz6enyVZSGhNz9a0oJiOkI2vMXTBdiWYtRFzq3vzcJJweanr26DDYUi5k5b=s250-p-k'
		],
		link: 'https://share.google/TP4sCYRwKX27ZaVtj'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjVeSLIfoN_DUS1UZq5wdBqy8mqdIEgp0g4pbQNE4DnhBfQ3YTXH=s64-c-rp-mo-ba5-br100',
		name: 'Derek',
		message: 'This is a wonderful spot. The food was amazing. I had the Jamaica and the Mumbai and my wife had the Buenos Aires and Mumbai. I was super impressed with both of mine and my wife loved hers as well. The chimichurri sauce was amazing. We will definitely be back to try other options.',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lESNq_Vm1wfet34KiZfyrbrbyLNrV9_Q1P_UsMZlqQlQRcKsgc2v4kEhrcSvrQNMGKA-kcEs3zmSl7FpsP0qbjS6sYNhn8yG-SnUEqvg0h_iGnWtqZ0XSvvbWk_LbSqwJClWZp1pqQ=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lES07XgsZhFaoVl6rv36sIwoFEXlyXEg_p5zRIOulH51Sfih6z1ITfSEwQ29iD6DU7gBNTR5Pbj0e6REicwEHpMEOH3e6vLBDdeOk8QU8IDpOIj0LYPSGvFEzd0u22jKZRmCimpk=s250-p-k'
		],
		link: 'https://share.google/lkyB8SPNNMLtEOryd'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a/ACg8ocLUnZkqdepCcftMhHBESHkDQ-fxqurXjjdAP32IC54ZfGBejNUd=s64-c-rp-mo-ba4-br100',
		name: 'SMH',
		message: 'We had purchased 8 for $35 empanada box at Findley Market before; but this time we were traveling back from Florence, KY and stopped by the restaurant/store - easy off of 75. Bought another 8 varied empanadas even the new Texas BQ delicious! Then had lunch at the restaurant. I tried the Chicago - mozzarella, basil, not over sauced excellent with their chimichurri! Husband had the Texas BBQ both excellent-looks small but fills you up! Chips & homemade salsa unlike any we\’ve had sweet heat, cilantro, onion. Try it all! Highly recommend - great to pop an empanada in Air Fryer 15 min quick meal.',
		images: [
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lESwsSZn_qyWCrglPgWeHb9DRGIQq39GBT3wAWq4S9bmGkmDxSSUR_wiJN-Y7yLbn2Bph48JnJfEhv59gLsfqJoZFkJpJnnEPzbJySWUHxF-kvQCt-QBjSFGAPyPps6QHdAmqTEI=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lEQWIUY8ftpm3LKxArjzRRBIm390m2gChN2ccJG6EKzLsnjd-57PjstX8c0QccPH4-EGYUI9U_5Dm61Kbld4IG-iEqtYF7r-MMdg8d-rM5eRfvJKth8_E6JSMG_4Mi1VhBZxFdM=s250-p-k',
			'https://lh3.googleusercontent.com/geougc-cs/AMG9lET_-b4LrRakDX0l-gc5_T63ZKte5WP1ZBT94nhXnv8Wt7m6_W1KkdYb2HhoC4SBpBStpp0OiyhuyxKtpHVpsxBHA8bAV2PBkMH8jbuQW6jWJxDgjyTWD_Ylv_WlI3yk3A_ycEQ=s250-p-k'
		],
		link: 'https://share.google/k9eNEXf1T8jjuk0uV'
	},
	{
		pfp: 'https://lh3.googleusercontent.com/a-/ALV-UjXCQU8nPR_zp-M8lTBM5UW4t1PSWagps0QIR6QKfwHpt3x2xAjg=s64-c-rp-mo-ba4-br100',
		name: 'Eva Gaida',
		message: 'This is a must-try. The empanadas are all so good, the dough is crispy and the flavors are excellent. My favorites are Kentucky and Miami. Everyone I\'ve told to try this place has absolutely loved it. This should be a franchise, it\'s such a smart and scaleable concept. I could imagine these all over America and beyond.',
		images: ['https://lh3.googleusercontent.com/geougc-cs/AMG9lESeIQHo8F2tlKWSKOog7FrtzWwLXuS6MOmZnulEKSKJYwMY1ItGqoAz0GgSrIkqDJcQsFTg8FzJvYxQ5_dOE42LIIHodTcQ9X2vPwic4xca_EI6IGDtHRsFdghZd2ypbKqQLHEt=s250-p-k'],
		link: 'https://share.google/HoI9U2ieo3tOIdKxJ'
	}
]

export default Reviews