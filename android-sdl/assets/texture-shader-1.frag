#ifdef GL_ES
precision mediump float;
#endif
// fragment shader
precision mediump float;
varying vec2 v_texCoord;
varying mat4 rotate_matrix_2;
uniform sampler2D s_texture;
void main()
{
    gl_FragColor = texture2D( s_texture, v_texCoord ) * vec4(
        1.0  -(rotate_matrix_2[0][1] / 1.0),
        1.0  -(rotate_matrix_2[0][1] / 1.0),
        1.0  -(rotate_matrix_2[0][1] / 1.0), 1.0);
}