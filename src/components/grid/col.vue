<template>
    <div class="c-col">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'CCol',
    props: {
        col: {
            type: [String, Number],
            validator(value) {
                return ['initial', 'auto', 'equal', 'none', 'breakpoint'].indexOf(value) !== -1
            }
        },
        gridColumns: {
            type: [Number],
            default: 12
        },
        colOffset: String,
        gutter: {
            type: [String, Object],
            default: '30px'
        },
        condensed: {
            type: Boolean,
            default: false
        },
        alignSelf: {
            type: String,
            validator(value) {
                return (
                    ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'].indexOf(
                        value
                    ) !== -1
                )
            }
        },
        flexGrow: {
            type: Number,
            default: 0
        },
        flexShrink: {
            type: Number,
            default: 1
        },
        flexBasis: {
            type: [Number, String],
            default: 'auto'
        },
        order: Number,
        gridType: {
            type: String,
            default: 'skeleton',
            validator(value) {
                return ['skeleton', 'margin-offset'].indexOf(value) !== -1
            }
        },
        lastChild: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        return {
            a: 10
        }
    }
}
</script>
<style lang="scss" scoped>
.c-col {
    @include grid-col(
        $col: v-bind(col),
        $grid-columns: v-bind(gridColumns),
        $col-offset: v-bind(colOffset),
        // $gutter: v-bind(gutter),
        $condensed: v-bind(condensed),
        $align-self: v-bind(alignSelf),
        $flex-grow: v-bind(flexGrow),
        $flex-shrink: v-bind(flexShrink),
        $flex-basis: v-bind(flexBasis),
        $order: v-bind(order),
        $grid-type: v-bind(gridType),
        $last-child: v-bind(lastChild)
    );
}
</style>
