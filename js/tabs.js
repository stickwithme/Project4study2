const findBlockByAlias = alias => {
    return $(".reviews__item").filter((ndx, item) =>{
        return $(item). attr("data-linked-with") == alias
    })
}
$(".interactive-avatar__link").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToSHow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__switcher-item");

    itemToSHow.addClass("active").siblings().removeClass("active");
    curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
});