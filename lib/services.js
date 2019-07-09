const axios = require('axios');

module.exports = {
	getAvailabilities: async ({location, reference}) => {
		const servers = await axios.get('https://www.ovh.com/engine/api/dedicated/server/availabilities?country=fr')
			.then(response => response.data);

		const results = servers.filter(s => {
			const {hardware, datacenters = []} = s;

			if (hardware !== reference) {
				return false;
			}

			const availablesDatacenters = datacenters.filter(d => {
				const {availability, datacenter} = d;

				if ('all' !== location && datacenter !== location) {
					return false;
				}

				return 'unavailable' !== availability;
			});

			return availablesDatacenters.length > 0;
		});

		return results;
	}
}