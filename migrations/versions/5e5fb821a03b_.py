"""empty message

Revision ID: 5e5fb821a03b
Revises: 8ac36ea9fa65
Create Date: 2023-07-12 16:12:19.637262

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e5fb821a03b'
down_revision = '8ac36ea9fa65'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('project', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('created_at', sa.DateTime(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('project', schema=None) as batch_op:
        batch_op.drop_column('created_at')
        batch_op.drop_column('description')

    # ### end Alembic commands ###