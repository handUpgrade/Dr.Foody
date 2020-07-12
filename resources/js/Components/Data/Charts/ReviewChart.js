import React from 'react';
import ExportExcel from './ExportExcel';
import { Table } from 'antd';

class ReviewChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_data_result: this.props.all_data_result,
            source: this.props.source,
            //  search_condition = 
            //     previous_term,
            //     later_term,
            //     second_condition,
            //     third_condition,
            //     food_id,
            result: null,
            result_count: 0,
            excel_data: null,
            table_data: null,
            columns: [
                {
                    title: '연령',
                    dataIndex: 'name',
                    width: 50,
                },
                {
                    title: '성별',
                    dataIndex: 'i1',
                    width: 50,
                },{
                    title: '유저 국가',
                    dataIndex: 'i2',
                    width: 150,
                },{
                    title: '조회 일시',
                    dataIndex: 'i3',
                    width: 150,
                },{
                    title: '기피재료',
                    dataIndex: 'i4',
                    width: 100,
                },{
                    title: '별점',
                    dataIndex: 'i5',
                    width: 50,
                },{
                    title: '내용',
                    dataIndex: 'i6',
                    width: 160,
                },{
                    title: '맛 리뷰 여부',
                    dataIndex: 'i7',
                    width: 60,
                },{
                    title: '선호 맛 레벨(매운맛)',
                    dataIndex: 'i8',
                    width: 100,
                },{
                    title: '선호 맛 레벨(쓴맛)',
                    dataIndex: 'i9',
                    width: 100,
                },{
                    title: '선호 맛 레벨(단맛)',
                    dataIndex: 'i10',
                    width: 100,
                },{
                    title: '선호 맛 레벨(신맛)',
                    dataIndex: 'i11',
                    width: 100,
                },{
                    title: '선호 맛 레벨(짠맛)',
                    dataIndex: 'i12',
                    width: 100,
                }
                ],
        }
    }

    setExcelData = (all_data_result, source) => {
        console.log('엑셀 set 실행');
        // 조회 정보일 때
        //  0여자 1남자
        let gender = '';
        // if(source===1){
        //     let excel_data =  [{
        //         columns: ["연령", "성별", "유저 국가", "조회 일시", "기피재료", "조회 장소", "선호 맛 레벨(매운맛)", "선호 맛 레벨(쓴맛)","선호 맛 레벨(단맛)","선호 맛 레벨(신맛)","선호 맛 레벨(짠맛)"],
        //         data: []
        //     }];
        //     for(let i=0; i < all_data_result.length; i++){
        //             let setting = [];
        //             if(all_data_result[i].gender){
        //                 gender = '남성';
        //             } else {
        //                 gender = '여성';
        //             }
        //             setting.push(all_data_result[i].age, gender, all_data_result[i].country
        //                 , all_data_result[i].date, all_data_result[i].material, all_data_result[i].place
        //                 , all_data_result[i].hot, all_data_result[i].bitter, all_data_result[i].sweet
        //                 , all_data_result[i].sour, all_data_result[i].salty
        //                 );
        //             excel_data[0].data.push(setting);
        //     }
        // } else 
        if(source===0){
            let table_data = [];
            let excel_data =  [{
                columns: ["연령", "성별", "유저 국가", "조회 일시", "기피재료",
                            "별점", "내용", "맛 리뷰 여부",
                            "선호 맛 레벨(매운맛)", "선호 맛 레벨(쓴맛)","선호 맛 레벨(단맛)",
                            "선호 맛 레벨(신맛)","선호 맛 레벨(짠맛)"],
                data: []
            }];
            for(let i=0; i < all_data_result.length; i++){
                let setting = [];
                let type = true;
                if(all_data_result[i].gender){
                    gender = '남성';
                } else {
                    gender = '여성';
                }
                if(all_data_result[i].type){
                    type = true;
                } else {
                    type = false;
                }
                table_data.push({
                    key: i,
                    name: all_data_result[i].age,
                    i1: gender,
                    i2: all_data_result[i].country,
                    i3: all_data_result[i].date,
                    i4: all_data_result[i].material,
                    i5: all_data_result[i].point,
                    i6: all_data_result[i].content,
                    i7: `${type}`,
                    i8: all_data_result[i].hot,
                    i9: all_data_result[i].bitter,
                    i10: all_data_result[i].sweet,
                    i11: all_data_result[i].sour,
                    i12: all_data_result[i].salty,
                });
                setting.push(all_data_result[i].age, gender, all_data_result[i].country
                    , all_data_result[i].date, all_data_result[i].material, all_data_result[i].point
                    , all_data_result[i].content, type
                    , all_data_result[i].hot, all_data_result[i].bitter, all_data_result[i].sweet
                    , all_data_result[i].sour, all_data_result[i].salty
                    );
                excel_data[0].data.push(setting);
            }
            this.setState({
                excel_data,
                table_data,
                result_count: all_data_result.length
            });
        }
    }
    componentDidUpdate(preveProps){
        if(this.props.all_data_result !== preveProps.all_data_result){
            this.setExcelData(this.props.all_data_result, this.props.source);
        }
    }
    componentDidMount(){
        console.log("엑셀 컴디마 실행");
        const {all_data_result,source } = this.state;
        this.setExcelData(all_data_result,source);
        // country, age, sweet, bitter, date, gender, hot, material, place, salty, sour, 
        // const columns = [
        //     {
        //       title: '기준 단어',
        //       dataIndex: 'name',
        //       width: 100,
        //     },
        //     {
        //       title: '유사단어(유사도)',
        //       dataIndex: 'i1',
        //       width: 139,
        //     },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i2',
        //         width: 139,
        //       },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i3',
        //         width: 139,
        //       },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i4',
        //         width: 139,
        //       },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i5',
        //         width: 139,
        //       },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i6',
        //         width: 139,
        //       },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i7',
        //         width: 139,
        //       },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i8',
        //         width: 139,
        //       },{
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i9',
        //         width: 139,
        //       },
        //       {
        //         title: '유사단어(유사도)',
        //         dataIndex: 'i10',
        //         width: 139,
        //       },
        //   ];
          
        //   let table_data = [];
        //   for (let i = 0; i < keyword_result.length; i++) {
        //     table_data.push({
        //       key: i,
        //       name: keyword_result[i].name,
        //       i1: `${keyword_result[i].surrounding[0]}(${keyword_result[i].surroundingNumber[0]})`,
        //       i2: `${keyword_result[i].surrounding[1]}(${keyword_result[i].surroundingNumber[1]})`,
        //       i3: `${keyword_result[i].surrounding[2]}(${keyword_result[i].surroundingNumber[2]})`,
        //       i4: `${keyword_result[i].surrounding[3]}(${keyword_result[i].surroundingNumber[3]})`,
        //       i5: `${keyword_result[i].surrounding[4]}(${keyword_result[i].surroundingNumber[4]})`,
        //       i6: `${keyword_result[i].surrounding[5]}(${keyword_result[i].surroundingNumber[5]})`,
        //       i7: `${keyword_result[i].surrounding[6]}(${keyword_result[i].surroundingNumber[6]})`,
        //       i8: `${keyword_result[i].surrounding[7]}(${keyword_result[i].surroundingNumber[7]})`,
        //       i9: `${keyword_result[i].surrounding[8]}(${keyword_result[i].surroundingNumber[8]})`,
        //       i10: `${keyword_result[i].surrounding[9]}(${keyword_result[i].surroundingNumber[9]})`,
        //     });
        //   }
    }
    
    render(){
        const { all_data_result, excel_data, columns, table_data, result_count} = this.state;
        console.log("all_data_result: ");
        console.log(all_data_result);
        return (
            <>
                <ExportExcel dataSet = {excel_data} />
                <div style={{ paddingTop: "50px"}}>{`총 ${result_count} 개의 결과가 검색되었습니다.`}</div>
                <Table columns={columns} dataSource={table_data} pagination={{ pageSize: 50 }} scroll={{ y: 700 }} />
            </>
        );
    }
}

export default ReviewChart;