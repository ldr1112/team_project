export default {
  User: [
    {
      user_id: 1,
      name: '제니',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 2,
      name: '아이린',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 3,
      name: '윈터',
      created_at: '2018-09-11 11:42:11'
    },
  ],
  Content: [
    {
      content_id: 1,
      user_id: 1,
      title: '10시 매치 구함',
      context: '강남 역삼 농구 3대3 농구 매치 구합니다',
      created_at: '2019-01-01 13:11:42',
      updated_at: null
    },
    {
      content_id: 2,
      user_id: 3,
      title: '용병 구합니다',
      context: '한강공원 8시 용병 2명 구합니다',
      created_at: '2019-01-02 13:11:42',
      updated_at: null
    },
    {
      content_id: 3,
      user_id: 2,
      title: '팀 구합니다',
      context: '신림쪽 농구팀 들어가고 싶어요~',
      created_at: '2019-03-29 13:11:42',
      updated_at: null
    }
  ],
  Comment: [
    {
      comment_id: 1,
      user_id: 1,
      content_id: 3,
      context: '생일 축하해요!',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    },
    {
      comment_id: 2,
      user_id: 3,
      content_id: 3,
      context: '주현언니 생일 축하해요!',
      created_at: '2019-03-29 16:11:11',
      updated_at: null
    },
    {
      comment_id: 3,
      user_id: 2,
      content_id: 1,
      context: '강의 잘 보고 있습니다 ^^',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    }
  ],
  SubComment: [
    {
      subcomment_id: 1,
      comment_id: 3,
      user_id: 1,
      context: '오 아이린님이 직접 댓글을 달아주시다니 ㅠㅠ 영광입니다!!',
      created_at: '2019-03-29 16:22:11',
      updated_at: null
    }
  ]
}