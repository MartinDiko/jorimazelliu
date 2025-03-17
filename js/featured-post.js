jQuery(document).ready(function($) {
    $('.featured-checkbox').on('change', function() {
        var postId = $(this).data('post-id');
        var isChecked = $(this).is(':checked') ? 1 : 0;

        $.ajax({
            url: featuredPost.ajax_url,
            type: 'POST',
            data: {
                action: 'toggle_featured_post',
                post_id: postId,
                featured: isChecked,
                nonce: featuredPost.nonce
            },
            success: function(response) {
                if (response.success) {
                    alert('Post updated successfully!');
                } else {
                    alert('Failed to update post.');
                }
            }
        });
    });
});
