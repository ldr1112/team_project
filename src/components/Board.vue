<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>

<script>
import data from '@/data'
// sort 함수 는 a-b 오름차순으로 정렬, b-a는 내림차순으로 정렬

export default {
  data() {
    let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
    items = items.map(contentItem => {
      return {
        ...contentItem, user_name: data.User.filter(
          userItem => userItem.user_id === contentItem.user_id
        )[0].name
      }
    })
    return {
      // fields 함수는 영어로 된 키값을 홈페이지에 한국어로 보여줄 때 사용하기 좋음
      fields: [
        {
          key: 'content_id',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'created_at',
          label: '작성일',
        },
        {
          key: 'user_name',
          label: '글쓴이',
        }
      ],
      items: items
    }
  },
  methods: {
    // row-clicked 게시물을 눌렀을 때 수정과 삭제를 할 수 있는 곳으로 이동
    rowClick(item, index, e) {
      this.$router.push({
        path: `/board/free/detail/${item.content_id}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/board/free/create'
      })
    }
  }
}
</script>