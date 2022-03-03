<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{contentId}}
          </div>
          <div class="content-detail-content-info-left-subject">
            {{title}}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{user}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{created}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{context}}
      </div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>
 
        <b-button v-b-toggle.collapse-1 variant="danger">삭제</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">정말 삭제하시겠습니까?</p>
            <b-button v-b-toggle.collapse-1-inner size="sm" variant="danger" @click="deleteData">네</b-button>
            <b-button v-b-toggle.collapse-1-inner size="sm" variant="primary" @click="cancle">아니요</b-button>
            <b-collapse id="collapse-1-inner" class="mt-2"></b-collapse>
          </b-card>
        </b-collapse>
      </div>
      <div class="content-detail-comment">
        덧글
      </div>
    </b-card>
  </div>
</template>

<script>
import data from "@/data"

export default {
  name: "ContentDetail",
  data() {
    const contentId = Number(this.$route.params.contentId)
    const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .name,
      created: contentData.created_at
    }
  },
  methods: {
    deleteData() {
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId)
      data.Content.splice(content_index, 1)
      this.$router.push({
        path: '/board/free'
      })
    },
    updateData() {
      this.$router.push({
        path: `/board/free/create/${this.contentId}`
      })
    },
    cancle() {
      // cancle(취소) 버튼을 눌렀을 때 board페이지로 가게끔 함
      this.$router.push({
        path: '/board/free/'
      })
    }
  }
}
</script>
