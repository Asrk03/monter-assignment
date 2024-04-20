import PaginationControls from "./PaginationControls";

const ReportDialog = ({searchParams}:{searchParams: { [key: string]: string | string[] | undefined }}) => {
    const dummyReports = [
        {
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },
        {
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_2021_4_1_2021.csv',
            downloadLink: '#'
        },{
            date: '22.07.2021',
            reportName: 'APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv',
            downloadLink: '#',
        },
        {
            date: '20.07.2021',
            reportName: 'RUR_L1_01_01_2021_31_03_2021.csv',
            downloadLink: '#',
        },
        {
            date: '21.07.2021',
            reportName: 'RUR_L2_(Excluding_NonWorking_Days)_4_1_202_4_1_2021.csv',
            downloadLink: '#'
        },
    ];
    const page = Number(searchParams['page'] ?? 1); // Default to page 1
    const per_page = Number(searchParams['per_page'] ?? 5); // Default to 5 per page
    const start = (page - 1) * per_page; // Correct calculation, starts from 0
    const end = Math.min(page * per_page, dummyReports.length); // Ensures end doesn't exceed total entries
    const entries = dummyReports.slice(start, end);
    console.log(page)
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-md h-auto w-auto">
                <div className="mb-4">
                    <h3 className="text-lg text-center font-medium text-gray-900">Recently Generated Reports</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                        <tr className="bg-gray-100 text-left text-sm font-medium">
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Report Name</th>
                            <th className="px-4 py-2">Download</th>
                        </tr>
                        </thead>
                        <tbody>
                            {entries.map((report)=>(
                                <tr key={report.reportName} className="border-b border-gray-200">
                                    <td className="px-4 py-2">{report.date}</td>
                                    <td className="px-4 py-2">{report.reportName}</td>
                                    <td className="px-4 py-2">
                                        <a href= {report.downloadLink} className="text-indigo-500 hover:underline">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mx-[300px] mt-[20px]"> <PaginationControls hasNextPage={end < dummyReports.length}hasPrevPage={start > 0}/></div>
                </div>
            </div>
        </div>
    );
};

export default ReportDialog;