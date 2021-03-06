import {COLORS} from "../../../../constants/ChartConstant";

const jointSessionData = () => {
	let arr = []
	for (let i = 0; i < sessionData.length; i++) {
		const data = sessionData[i];
		const label = sessionLabels[i];
		const color = sessionColor[i]
		arr = [...arr, {
			data: data,
			label: label,
			color: color
		}]
	}
	return arr
}

export const VisitorChartData = {
  	series: [
		{
			name: "Bookings",
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
		},
		{
			name: "Products",
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
		}
	],
	categories:[
		'01 Jan',
		'02 Jan',
		'03 Jan',
		'04 Jan',
		'05 Jan',
		'06 Jan',
		'07 Jan',
		'08 Jan',
		'09 Jan',
		'10 Jan',
		'11 Jan',
		'12 Jan'
	]
}

export const AnnualStatisticData = [
	{
		title: 'Court Name',
		value:'Ekram Sports Areana',
	}
]

export const ActiveMembersData = [{
	name: 'Members',
	data: [25, 15, 41, 25, 44, 12, 36, 19, 54]
}]

export const NewMembersData = [{
	img: "/img/avatars/thumb-2.jpg",
	title: "Software Engineer",
	name: "Terrance Moreno",
},
{
	img: "/img/avatars/thumb-3.jpg",
	title: "UI/UX Designer",
	name: "Ron Vargas",
},
{
	img: "/img/avatars/thumb-4.jpg",
	title: "HR Executive",
	name: "Luke Cook",
},
{
	img: "/img/avatars/thumb-5.jpg",
	title: "Frontend Developer",
	name: "Joyce Freeman",
},
{
	img: "/img/avatars/thumb-6.jpg",
	title: "Compliance Manager",
	name: "Samantha Phillips",
}]

export const RecentTransactionData = [
	{
		id: '#5331',
		name: 'Clayton Bates',
		date: '8 May 2020',
		amount: 'Ekam Sports Areana',
		status: 'Approved',
		avatarColor: '#04d182'
	},
	{
		id: '#5332',
		name: 'Gabriel Frazier',
		date: '6 May 2020',
		amount: 'Ekam Sports Areana',
		status: 'Approved',
		avatarColor: '#fa8c16'
	},
	{
		id: '#5333',
		name: 'Debra Hamilton',
		date: '1 May 2020',
		amount: 'Ekam Sports Areana',
		status: 'Pending',
		avatarColor: '#1890ff'
	},
	{
		id: '#5334',
		name: 'Stacey Ward',
		date: '28 April 2020',
		amount: 'Ekam Sports Areana',
		status: 'Rejected',
		avatarColor: '#ffc542'
	},
	{
		id: '#5335',
		name: 'Troy Alexander',
		date: '28 April 2020',
		amount: 'Ekam Sports Areana',
		status: 'Approved',
		avatarColor: '#ff6b72'
	},
];

export const ClientsData = [
	{
		mobile: '+91 8554491229',
		name: 'Clayton Bates',
		date: '8 May 2020',
		avatarColor: '#04d182'
	},
	{
		mobile: '+91 8554491229',
		name: 'Gabriel Frazier',
		date: '6 May 2020',
		avatarColor: '#fa8c16'
	},
	{
		mobile: '+91 8554491229',
		name: 'Debra Hamilton',
		date: '1 May 2020',
		avatarColor: '#1890ff'
	},
	{
		mobile: '+91 8554491229',
		name: 'Stacey Ward',
		date: '28 April 2020',
		avatarColor: '#ffc542'
	},
	{
		mobile: '+91 8554491229',
		name: 'Troy Alexander',
		date: '28 April 2020',
		avatarColor: '#ff6b72'
	},
];

export const sessionColor = [COLORS[0], COLORS[1], COLORS[3], COLORS[5]]
export const sessionData = [3561, 1443, 2462]
export const sessionLabels = ['Completed', 'Non-Completed', 'Cancelled']
export const conbinedSessionData = jointSessionData()
